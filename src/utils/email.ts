import emailjs from '@emailjs/browser'

const USER_ID = import.meta.env.VITE_EMAILJS_USER_ID || import.meta.env.VITE_EMAILJS_PUBLIC_KEY
const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID

let _initialized = false
function initEmailJS() {
  if (!_initialized && USER_ID) {
    try {
      emailjs.init(USER_ID)
      _initialized = true
    } catch (err) {
      // swallow init errors; send will surface failures
      // eslint-disable-next-line no-console
      console.error('EmailJS init error', err)
    }
  }
}

export type SendDetails = {
  to_email?: string
  subject?: string
  message: string
  [key: string]: any
}

export function sendCustomEmail(details: SendDetails) {
  initEmailJS()

  const templateParams = {
    to_email: details.to_email,
    subject: details.subject,
    message: details.message,
    ...details,
  }

  if (!SERVICE_ID || !TEMPLATE_ID) {
    return Promise.reject(new Error('Missing EmailJS service or template ID. Set VITE_EMAILJS_SERVICE_ID and VITE_EMAILJS_TEMPLATE_ID in .env'))
  }

  return emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams)
}

export default sendCustomEmail
