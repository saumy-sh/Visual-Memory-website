import { useEffect, useState } from 'react';
import { SignInButton, SignedIn, SignedOut, UserButton, useUser, useAuth } from '@clerk/clerk-react';
import { neon } from '@neondatabase/serverless';

export function AuthButton() {
  const { user, isLoaded, isSignedIn } = useUser();
  const { getToken } = useAuth();
  const [syncing, setSyncing] = useState(false);
  const [tier, setTier] = useState<string>('');

  useEffect(() => {
    if (isLoaded && isSignedIn && user?.primaryEmailAddress?.emailAddress) {
      syncUser(user.primaryEmailAddress.emailAddress);
    }
  }, [isLoaded, isSignedIn, user]);

  const syncUser = async (email: string) => {
    if (!email) return;
    setSyncing(true);
    try {
      // 1. Get the JWT from Clerk using your template (we assume you named it 'neon')
      const token = await getToken({ template: 'neon' });
      if (!token) throw new Error("Failed to get Clerk JWT for Neon");

      // 2. Connect to Neon directly from the frontend
      // The DATABASE_AUTHENTICATED_URL uses the `authenticated` role.
      // Neon will verify the token signature using the JWKS URL you provided.
      const dbUrl = import.meta.env.VITE_DATABASE_AUTHENTICATED_URL;
      if (!dbUrl) throw new Error("Missing VITE_DATABASE_AUTHENTICATED_URL");

      const sql = neon(dbUrl, { authToken: token });

      // 3. Execute the upsert query directly!
      const result = await sql`
        INSERT INTO users (email, subscription_tier, logined_at)
        VALUES (${email}, 'free', NOW())
        ON CONFLICT (email)
        DO UPDATE SET logined_at = NOW()
        RETURNING subscription_tier;
      `;

      if (result && result.length > 0) {
        setTier(result[0].subscription_tier);
      }
    } catch (err) {
      console.error('Failed to sync user directly to Neon:', err);
    } finally {
      setSyncing(false);
    }
  };

  if (!isLoaded) {
    return (
      <div style={{ padding: '8px 18px', color: 'rgba(255,255,255,0.6)', fontSize: 13 }}>
        Loading...
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <SignedOut>
        <SignInButton mode="modal">
          <button
            style={{
              padding: '8px 18px', borderRadius: 100, 
              background: 'rgba(255,255,255,0.1)', color: '#fff', 
              fontSize: 13, fontWeight: 500, border: 'none', cursor: 'pointer',
              transition: 'background 0.2s'
            }}
            onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.2)' }}
            onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)' }}
          >
            Sign In
          </button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        {syncing && <span style={{fontSize: 10, opacity: 0.5, color: '#fff'}}>syncing DB...</span>}
        <UserButton 
          appearance={{
            elements: {
              userButtonAvatarBox: { width: 36, height: 36 }
            }
          }}
        />
      </SignedIn>
    </div>
  );
}
