import React, { useState } from 'react'

const Login = ({ handleLogin }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    handleLogin(email, password)
    setEmail('')
    setPassword('')
  }

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a]'>
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute -top-40 -right-40 w-80 h-80 bg-emerald-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20' />
        <div className='absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20' />
        <div className='absolute top-1/2 left-1/2 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20' />
      </div>

      <div className='relative z-10 w-full max-w-md px-6 py-8'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold text-white mb-2'>Employee MS</h1>
          <p className='text-gray-300'>Manage tasks efficiently</p>
        </div>

        <form onSubmit={submitHandler} className='space-y-6'>
          <div className='group'>
            <label className='block text-sm font-medium text-gray-300 mb-2'>Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className='w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-emerald-500/30 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white/20 focus:shadow-lg focus:shadow-emerald-500/20'
              type='email'
              placeholder='Enter your email'
            />
          </div>

          <div className='group'>
            <label className='block text-sm font-medium text-gray-300 mb-2'>Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className='w-full px-4 py-3 rounded-lg bg-white/10 border-2 border-emerald-500/30 text-white placeholder-gray-400 outline-none transition-all duration-300 focus:border-emerald-500 focus:bg-white/20 focus:shadow-lg focus:shadow-emerald-500/20'
              type='password'
              placeholder='Enter password'
            />
          </div>

          <button
            type='submit'
            className='w-full py-3 px-4 bg-gradient-to-r from-emerald-500 to-emerald-600 text-white font-semibold rounded-lg hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 transform hover:scale-105 active:scale-95 shadow-lg hover:shadow-emerald-500/50'
          >
            Login
          </button>
        </form>

        <div className='mt-8 pt-6 border-t border-gray-600/30'>
          <p className='text-xs text-gray-400 text-center mb-4'>Demo Credentials</p>
          <div className='space-y-2 text-xs text-gray-400'>
            <div className='bg-white/5 p-3 rounded border border-gray-600/20'>
              <p className='font-semibold text-gray-300'>Admin:</p>
              <p>admin@example.com / 123</p>
            </div>
            <div className='bg-white/5 p-3 rounded border border-gray-600/20'>
              <p className='font-semibold text-gray-300'>Employee:</p>
              <p>e@e.com / 123</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
