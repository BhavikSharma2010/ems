import { useState } from 'react'
import { Lock } from 'lucide-react'
import CredentialsModal from './CredentialsModal'

const Landing = ({ onLoginClick, onDemoLogin }) => {
  const [credentialsOpen, setCredentialsOpen] = useState(false)

  return (
    <div className='flex min-h-screen flex-col bg-ink-950 font-sans text-gray-300 antialiased'>
      {/* Hero */}
      <main className='relative flex min-h-screen flex-1 flex-col overflow-hidden'>
        {/* background photo */}
        <img
          src='/hero-bg.jpg'
          alt=''
          className='absolute inset-0 h-full w-full object-cover'
        />
        {/* scrim for legibility */}
        <div className='absolute inset-0 bg-ink-950/70' />
        <div className='absolute inset-0 bg-gradient-to-r from-ink-950/90 via-ink-950/60 to-ink-950/40' />
        <div className='absolute inset-x-0 bottom-0 h-48 bg-gradient-to-t from-ink-950 to-transparent' />

        {/* top bar */}
        <header className='relative z-10 mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-6'>
          <p className='font-display text-lg font-bold tracking-wide text-white'>
            EMS
          </p>
          <button
            onClick={onLoginClick}
            className='rounded-lg border border-white/25 px-5 py-2 font-display text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10'
          >
            Login
          </button>
        </header>

        {/* hero content */}
        <div className='relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-center px-6 pb-24'>
          <div className='max-w-xl'>
            <span className='h-px w-12 bg-accent-400 block' />
            <h1 className='mt-6 font-display text-5xl font-bold leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl'>
              Employee Management System
            </h1>
            <p className='mt-6 max-w-md text-base leading-relaxed text-gray-300 md:text-lg'>
              A lightweight task-management platform for small teams. Admins
              create and assign work; employees accept, complete, or flag it —
              with live status for both roles.
            </p>
            <div className='mt-10 flex items-center gap-4'>
              <button
                onClick={onLoginClick}
                className='rounded-lg bg-accent-500 px-8 py-3.5 font-display text-sm font-semibold text-ink-950 transition-colors duration-300 hover:bg-accent-400'
              >
                Get Started
              </button>
              <button
                onClick={() => setCredentialsOpen(true)}
                className='rounded-lg border border-white/25 px-8 py-3.5 font-display text-sm font-semibold text-white transition-colors duration-300 hover:border-white/60 hover:bg-white/10'
              >
                Demo Access
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Highlights */}
      <section className='border-t border-white/5 bg-ink-900/60'>
        <div className='mx-auto grid max-w-6xl gap-10 px-6 py-16 md:grid-cols-3 md:gap-8'>
          <div>
            <h3 className='font-display text-sm font-semibold uppercase tracking-widest text-accent-400'>
              For Admins
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-gray-400'>
              Create tasks with categories and due dates, assign them to any
              team member, and see every employee's workload on one screen.
            </p>
          </div>
          <div>
            <h3 className='font-display text-sm font-semibold uppercase tracking-widest text-accent-400'>
              For Employees
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-gray-400'>
              A personal board of your tasks — accept new work, mark progress,
              complete it, or flag it as failed when something blocks you.
            </p>
          </div>
          <div>
            <h3 className='font-display text-sm font-semibold uppercase tracking-widest text-accent-400'>
              For Teams
            </h3>
            <p className='mt-3 text-sm leading-relaxed text-gray-400'>
              Progress counts update live for both roles, so status meetings
              take minutes — everyone already knows where the work stands.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className='border-t border-white/5 px-6 py-10'>
        <div className='mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row'>
          <div className='text-center sm:text-left'>
            <p className='font-display text-sm font-semibold text-white'>EMS</p>
            <p className='mt-1 text-xs text-gray-500'>
              Employee Management System
            </p>
          </div>

          <button
            onClick={() => setCredentialsOpen(true)}
            aria-label='Show demo credentials'
            className='inline-flex items-center gap-2 rounded-lg border border-white/10 px-4 py-2 text-xs text-gray-400 transition-colors duration-300 hover:border-white/20 hover:text-white'
          >
            <Lock className='h-3.5 w-3.5' />
            Demo credentials
          </button>

          <p className='text-xs text-gray-500'>
            Built by <span className='text-gray-300'>Bhavik</span>
          </p>
        </div>
      </footer>

      <CredentialsModal
        isOpen={credentialsOpen}
        onClose={() => setCredentialsOpen(false)}
        onDemoLogin={onDemoLogin}
      />
    </div>
  )
}

export default Landing
