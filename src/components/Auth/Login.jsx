import React, { useState } from 'react'

const Login = ({ handleLogin, onBack }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='relative flex h-screen w-screen items-center justify-center overflow-hidden bg-ink-950'>
      <div className='absolute inset-0'>
        <div className='absolute -top-40 -right-40 h-96 w-96 rounded-full bg-accent-500/15 blur-3xl' />
        <div className='absolute -bottom-40 -left-40 h-96 w-96 rounded-full bg-gold-500/10 blur-3xl' />
        <div className='absolute top-1/2 left-1/3 h-72 w-72 rounded-full bg-accent-600/10 blur-3xl' />
      </div>

      <div className='relative z-10 w-full max-w-md px-6 py-8'>
        {onBack && (
          <button
            onClick={onBack}
            className='mb-6 text-sm text-gray-400 transition-colors duration-300 hover:text-accent-300'
          >
            &larr; Back to home
          </button>
        )}

        <div className='mb-8 text-center'>
          <h1 className='font-display text-4xl font-bold text-white'>
            EMS
          </h1>
          <p className='mt-2 text-gray-400'>Employee Management System</p>
        </div>

        <form onSubmit={submitHandler} className='space-y-6'>
          <div className='group'>
            <label className='mb-2 block text-sm font-medium text-gray-300'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 outline-none backdrop-blur-xl transition-all duration-300 focus:border-accent-400/50 focus:bg-white/[0.07] focus:shadow-lg focus:shadow-accent-500/10'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='group'>
            <label className='mb-2 block text-sm font-medium text-gray-300'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-white placeholder-gray-500 outline-none backdrop-blur-xl transition-all duration-300 focus:border-accent-400/50 focus:bg-white/[0.07] focus:shadow-lg focus:shadow-accent-500/10'
              type='password'
              placeholder='Enter password'
            />
          </div>

          <button
            type='submit'
            className='w-full rounded-xl bg-gradient-to-r from-accent-500 to-accent-600 px-4 py-3 font-semibold text-ink-950 shadow-lg shadow-accent-500/20 transition-all duration-300 hover:scale-[1.02] hover:shadow-accent-400/40 active:scale-95'
          >
            Sign in
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
