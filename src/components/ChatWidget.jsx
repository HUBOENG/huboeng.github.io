import { useEffect, useRef, useState } from 'react'

// WhatsApp number in international format (no +, spaces, or dashes).
const WHATSAPP = '9779849579603'
const WHATSAPP_DISPLAY = '+977 9849579603'
const waLink = (text) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`

// Rule-based assistant — runs fully client-side, no backend needed.
const quickReplies = [
  { label: 'Our services', key: 'services' },
  { label: 'Location', key: 'location' },
  { label: 'Contact info', key: 'contact' },
  { label: 'Get a quote', key: 'quote' },
]

const answers = {
  services:
    'HUBO offers four disciplines:\n• Software Development\n• Civil Engineering\n• Electrical Engineering\n• Research\n\nWhich one can we help you with?',
  location:
    'We’re based in Banepa, Kavrepalanchowk, Nepal — serving clients locally and beyond.',
  contact:
    `You can reach us at:\n• Email: huboengineering@gmail.com\n• Phone / WhatsApp: ${WHATSAPP_DISPLAY}`,
  quote:
    'Happy to help with a quote! Tap the WhatsApp button below and tell us about your project — our team usually replies right away.',
}

function botReply(text) {
  const t = text.toLowerCase()
  if (/(service|software|civil|electric|research|develop)/.test(t)) return answers.services
  if (/(price|quote|cost|estimate|budget|hire)/.test(t)) return answers.quote
  if (/(where|location|address|office|banepa)/.test(t)) return answers.location
  if (/(contact|email|phone|call|number|reach)/.test(t)) return answers.contact
  if (/(hi|hello|hey|namaste|greet)/.test(t))
    return 'Hello! 👋 How can we help you today? Pick an option below or message us on WhatsApp.'
  return `Thanks for your message! For a quick, detailed answer, tap the WhatsApp button below to chat with our team directly.`
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false)
  const [input, setInput] = useState('')
  const [messages, setMessages] = useState([
    {
      from: 'bot',
      text: 'Hi! 👋 I’m the HUBO assistant. Ask about our services, or chat with our team on WhatsApp.',
    },
  ])
  const scrollRef = useRef(null)

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: 'smooth' })
  }, [messages, open])

  const send = (text) => {
    const trimmed = text.trim()
    if (!trimmed) return
    setMessages((m) => [...m, { from: 'user', text: trimmed }, { from: 'bot', text: botReply(trimmed) }])
    setInput('')
  }

  const quick = (key, label) => {
    setMessages((m) => [...m, { from: 'user', text: label }, { from: 'bot', text: answers[key] }])
  }

  return (
    <>
      {/* Chat panel */}
      {open && (
        <div className="fixed bottom-24 right-5 z-[70] flex h-[30rem] w-[calc(100vw-2.5rem)] max-w-[23rem] flex-col overflow-hidden rounded-2xl border border-line bg-base-900 shadow-2xl animate-fade-up">
          {/* Header */}
          <div className="flex items-center gap-3 bg-acc-600 px-4 py-3.5 text-white">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-white p-1">
              <img src="/assets/images/Logo.png" alt="HUBO" className="h-full w-auto object-contain" />
            </span>
            <div className="flex-1">
              <p className="font-display text-sm font-semibold leading-tight">HUBO Assistant</p>
              <p className="flex items-center gap-1.5 text-xs text-white/80">
                <span className="h-1.5 w-1.5 rounded-full bg-lime-400" />
                Online — replies instantly
              </p>
            </div>
            <button
              aria-label="Close chat"
              onClick={() => setOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full transition hover:bg-white/20"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div ref={scrollRef} className="flex-1 space-y-3 overflow-y-auto bg-base-850 px-4 py-4">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.from === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div
                  className={`max-w-[85%] whitespace-pre-line rounded-2xl px-3.5 py-2.5 text-sm leading-relaxed ${
                    m.from === 'user'
                      ? 'rounded-br-sm bg-acc-500 text-white'
                      : 'rounded-bl-sm border border-line bg-base-900 text-fg-dim'
                  }`}
                >
                  {m.text}
                </div>
              </div>
            ))}

            {/* Quick replies */}
            <div className="flex flex-wrap gap-2 pt-1">
              {quickReplies.map((q) => (
                <button
                  key={q.key}
                  onClick={() => quick(q.key, q.label)}
                  className="rounded-full border border-acc-500/40 bg-acc-500/5 px-3 py-1.5 text-xs font-medium text-acc-600 transition hover:bg-acc-500/10"
                >
                  {q.label}
                </button>
              ))}
            </div>
          </div>

          {/* Input */}
          <form
            onSubmit={(e) => {
              e.preventDefault()
              send(input)
            }}
            className="flex items-center gap-2 border-t border-line bg-base-900 px-3 py-2.5"
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 rounded-full border border-line bg-base-850 px-3.5 py-2 text-sm text-fg outline-none transition placeholder:text-fg-faint focus:border-acc-500"
            />
            <button
              type="submit"
              aria-label="Send"
              className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-acc-500 text-white transition hover:bg-acc-600"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </form>

          {/* WhatsApp CTA */}
          <a
            href={waLink('Hello HUBO! I have a question about your services.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 bg-[#25D366] px-4 py-3 text-sm font-semibold text-white transition hover:brightness-95"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.5 14.4c-.3-.2-1.7-.9-2-1-.3-.1-.5-.1-.6.2-.2.3-.7.9-.9 1.1-.2.2-.3.2-.6.1-1.5-.7-2.5-1.3-3.5-3-.3-.5.3-.4.7-1.4.1-.2 0-.4 0-.5-.1-.2-.6-1.4-.8-1.9-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.3.3-1 .9-1 2.3s1 2.7 1.2 2.9c.1.2 2 3.1 5 4.3.7.3 1.2.5 1.7.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.2-.3-.2-.6-.4z M12 2a10 10 0 00-8.6 15l-1.3 4.7 4.8-1.3A10 10 0 1012 2zm0 18.2c-1.5 0-3-.4-4.3-1.1l-.3-.2-2.9.8.8-2.8-.2-.3A8.2 8.2 0 1112 20.2z" />
            </svg>
            Continue on WhatsApp
          </a>
        </div>
      )}

      {/* Floating launcher */}
      <button
        aria-label={open ? 'Close chat' : 'Open chat'}
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-5 right-5 z-[70] flex h-14 w-14 items-center justify-center rounded-full bg-acc-500 text-white shadow-lg shadow-acc-500/40 transition-all hover:bg-acc-600 hover:shadow-xl"
      >
        {!open && (
          <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-acc-500 opacity-30" />
        )}
        {open ? (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
          </svg>
        ) : (
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.9">
            <path d="M21 11.5a8.38 8.38 0 01-8.5 8.5 8.5 8.5 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 018.5-8.5 8.38 8.38 0 018.5 8.5z" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        )}
      </button>
    </>
  )
}
