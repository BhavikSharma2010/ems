import { useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { Check, Copy, ShieldCheck, User, X } from 'lucide-react'

const COPY_RESET_MS = 1500

const accounts = [
  {
    icon: ShieldCheck,
    role: 'Admin',
    email: 'admin@example.com',
    password: '123',
    note: 'Full task management, team directory, analytics.',
    loginLabel: 'Login as Admin',
  },
  {
    icon: User,
    role: 'Employee',
    email: 'e@e.com',
    password: '123',
    note: 'Personal board — accept, complete, or flag tasks.',
    loginLabel: 'Login as Employee',
  },
]

const CopyField = ({ label, value }) => {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef(null)

  useEffect(() => () => clearTimeout(timerRef.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      clearTimeout(timerRef.current)
      timerRef.current = setTimeout(() => setCopied(false), COPY_RESET_MS)
    } catch {
      // clipboard unavailable (e.g. insecure context) — leave value visible
    }
  }

  return (
    <div className='flex items-center justify-between rounded-lg border border-white/5 bg-white/[0.03] px-3 py-2'>
      <div className='min-w-0'>
        <p className='text-[10px] uppercase tracking-widest text-gray-600'>{label}</p>
        <p className='truncate font-mono text-sm text-gray-200'>{value}</p>
      </div>
      <button
        onClick={copy}
        aria-label={`Copy ${label}`}
        className='ml-3 flex h-7 w-7 flex-none items-center justify-center rounded-md border border-white/10 text-gray-500 transition-colors duration-300 hover:border-accent-400/40 hover:text-accent-300'
      >
        {copied ? <Check className='h-3.5 w-3.5 text-accent-400' /> : <Copy className='h-3.5 w-3.5' />}
      </button>
    </div>
  )
}

const CredentialsModal = ({ isOpen, onClose, onDemoLogin }) => {
  const dialogRef = useRef(null)
  const openerRef = useRef(null)

  useEffect(() => {
    if (!isOpen) return
    openerRef.current = document.activeElement
    dialogRef.current?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') {
        onClose()
        return
      }
      // keep Tab cycling inside the dialog
      if (e.key !== 'Tab') return
      const focusables = dialogRef.current?.querySelectorAll(
        'button, [href], input, [tabindex]:not([tabindex="-1"])'
      )
      if (!focusables?.length) return
      const first = focusables[0]
      const last = focusables[focusables.length - 1]
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
      openerRef.current?.focus()
    }
  }, [isOpen, onClose])

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          className='fixed inset-0 z-[60] flex items-center justify-center bg-ink-950/80 p-4 backdrop-blur-sm'
        >
          <motion.div
            ref={dialogRef}
            tabIndex={-1}
            role='dialog'
            aria-modal='true'
            aria-labelledby='demo-access-title'
            initial={{ opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.94, y: 16 }}
            transition={{ type: 'spring', stiffness: 320, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
            className='w-full max-w-lg rounded-2xl border border-white/10 bg-ink-800/95 p-7 shadow-2xl shadow-black/60 backdrop-blur-xl outline-none'
          >
            <div className='mb-6 flex items-start justify-between'>
              <div>
                <h3 id='demo-access-title' className='font-display text-xl font-bold text-white'>
                  Demo access
                </h3>
                <p className='mt-1 text-sm text-gray-500'>
                  Pick a role and jump straight in — no typing needed.
                </p>
              </div>
              <button
                onClick={onClose}
                aria-label='Close'
                className='flex h-8 w-8 flex-none items-center justify-center rounded-lg border border-white/10 text-gray-500 transition-colors duration-300 hover:text-white'
              >
                <X className='h-4 w-4' />
              </button>
            </div>

            <div className='space-y-4'>
              {accounts.map(({ icon: Icon, role, email, password, note, loginLabel }) => (
                <div
                  key={role}
                  className='rounded-xl border border-white/10 bg-white/[0.03] p-5'
                >
                  <div className='mb-4 flex items-center gap-3'>
                    <span className='flex h-9 w-9 items-center justify-center rounded-lg border border-accent-400/20 bg-accent-500/10'>
                      <Icon className='h-4 w-4 text-accent-300' />
                    </span>
                    <div>
                      <p className='font-display text-sm font-semibold text-white'>{role}</p>
                      <p className='text-xs text-gray-500'>{note}</p>
                    </div>
                  </div>

                  <div className='space-y-2'>
                    <CopyField label='Email' value={email} />
                    <CopyField label='Password' value={password} />
                  </div>

                  <button
                    onClick={() => onDemoLogin(email, password)}
                    className='mt-4 w-full rounded-lg bg-accent-400 py-2.5 font-display text-sm font-semibold text-ink-950 transition-all duration-300 hover:bg-accent-300 hover:shadow-lg hover:shadow-accent-500/25'
                  >
                    {loginLabel}
                  </button>
                </div>
              ))}
            </div>

            <p className='mt-5 text-center text-xs text-gray-600'>
              Other seeded employees:{' '}
              <span className='font-mono text-gray-500'>
                employee2–5@example.com / 123
              </span>
            </p>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default CredentialsModal
