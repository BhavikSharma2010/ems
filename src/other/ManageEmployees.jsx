import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const ManageEmployees = () => {
  const { employees } = useContext(AuthContext)
  const [firstName, setFirstName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showForm, setShowForm] = useState(false)
  const [successMessage, setSuccessMessage] = useState('')
  const [showResetConfirm, setShowResetConfirm] = useState(false)

  const handleCreateEmployee = (e) => {
    e.preventDefault()

    if (!firstName || !email || !password) {
      alert('Please fill all fields')
      return
    }

    if (employees.some(emp => emp.email === email)) {
      alert('Email already exists')
      return
    }

    const newEmployee = {
      id: Math.max(...employees.map(e => e.id), 0) + 1,
      firstName,
      email,
      password,
      taskNumber: {
        active: 0,
        newTask: 0,
        completed: 0,
        failed: 0
      },
      tasks: []
    }

    const updatedEmployees = [...employees, newEmployee]
    localStorage.setItem('employees', JSON.stringify(updatedEmployees))

    setSuccessMessage(`Employee "${firstName}" created successfully!`)
    setTimeout(() => setSuccessMessage(''), 3000)

    setFirstName('')
    setEmail('')
    setPassword('')
    setShowForm(false)

    window.location.reload()
  }

  const handleResetDemo = () => {
    const emptyEmployees = []
    localStorage.setItem('employees', JSON.stringify(emptyEmployees))
    setSuccessMessage('✓ All employees cleared! Demo is ready for fresh start.')
    setTimeout(() => {
      setShowResetConfirm(false)
      window.location.reload()
    }, 1500)
  }

  return (
    <div className='mt-8'>
      <div className='mb-8 flex gap-4'>
        <button
          onClick={() => setShowForm(!showForm)}
          className='bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95'
        >
          {showForm ? 'Cancel' : '+ Add New Employee'}
        </button>

        {employees.length > 0 && (
          <button
            onClick={() => setShowResetConfirm(true)}
            className='bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-300 transform hover:scale-105 active:scale-95'
          >
            🔄 Reset Demo
          </button>
        )}
      </div>

      {showResetConfirm && (
        <div className='fixed inset-0 bg-black/50 flex items-center justify-center z-50'>
          <div className='bg-[#1c1c1c] p-6 rounded-lg border border-red-500/50 max-w-sm'>
            <h3 className='text-white text-lg font-semibold mb-2'>Reset Demo?</h3>
            <p className='text-gray-300 text-sm mb-6'>
              This will remove all {employees.length} employees. You'll start fresh with an empty system. This cannot be undone.
            </p>
            <div className='flex gap-3'>
              <button
                onClick={() => setShowResetConfirm(false)}
                className='flex-1 bg-gray-600 hover:bg-gray-700 text-white font-semibold py-2 rounded-lg transition-all'
              >
                Cancel
              </button>
              <button
                onClick={handleResetDemo}
                className='flex-1 bg-red-600 hover:bg-red-700 text-white font-semibold py-2 rounded-lg transition-all'
              >
                Yes, Reset
              </button>
            </div>
          </div>
        </div>
      )}

      {successMessage && (
        <div className='mb-6 p-3 bg-green-500/20 border border-green-500 text-green-300 rounded-lg text-sm'>
          {successMessage}
        </div>
      )}

      {showForm && (
        <div className='p-6 bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] rounded-lg border border-emerald-500/20 mb-8'>
          <h3 className='text-white text-lg font-semibold mb-6'>Create New Employee</h3>
          <form onSubmit={handleCreateEmployee} className='space-y-4'>
            <div>
              <label className='text-sm text-gray-300 mb-1 block'>Full Name</label>
              <input
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
                required
                className='w-full text-sm py-2 px-3 rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white placeholder-gray-500 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all'
                type='text'
                placeholder='John Doe'
              />
            </div>

            <div>
              <label className='text-sm text-gray-300 mb-1 block'>Email</label>
              <input
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className='w-full text-sm py-2 px-3 rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white placeholder-gray-500 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all'
                type='email'
                placeholder='john@example.com'
              />
            </div>

            <div>
              <label className='text-sm text-gray-300 mb-1 block'>Password</label>
              <input
                value={password}
                onChange={e => setPassword(e.target.value)}
                required
                className='w-full text-sm py-2 px-3 rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white placeholder-gray-500 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all'
                type='password'
                placeholder='Enter password'
              />
            </div>

            <button
              type='submit'
              className='w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 py-2 px-4 rounded text-sm text-white font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95'
            >
              Create Employee
            </button>
          </form>
        </div>
      )}

      <div className='bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] rounded-lg border border-gray-600/30 overflow-hidden'>
        <div className='px-6 py-4 border-b border-gray-600/30'>
          <h3 className='text-white text-lg font-semibold'>
            {employees.length === 0 ? '📋 No Employees Yet' : `👥 Employee List & Credentials (${employees.length})`}
          </h3>
        </div>

        {employees.length === 0 ? (
          <div className='px-6 py-12 text-center'>
            <p className='text-gray-400 text-sm mb-4'>No employees created yet.</p>
            <p className='text-gray-500 text-xs'>Click "+ Add New Employee" to get started!</p>
          </div>
        ) : (
          <div className='overflow-x-auto'>
            <table className='w-full'>
              <thead>
                <tr className='bg-[#0f0f0f] border-b border-gray-600/30'>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-300'>Name</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-300'>Email</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-300'>Password</th>
                  <th className='px-6 py-4 text-left text-sm font-semibold text-gray-300'>Tasks Assigned</th>
                </tr>
              </thead>
              <tbody>
                {employees.map((emp, idx) => (
                  <tr
                    key={emp.id}
                    className={`border-b border-gray-600/30 transition-colors ${
                      idx % 2 === 0 ? 'bg-[#0f0f0f]/50' : 'bg-[#1c1c1c]/50'
                    } hover:bg-[#2a2a2a]/50`}
                  >
                    <td className='px-6 py-4 text-sm text-white font-medium'>{emp.firstName}</td>
                    <td className='px-6 py-4 text-sm text-gray-300'>
                      <span className='bg-gray-700/30 px-3 py-1 rounded text-xs'>{emp.email}</span>
                    </td>
                    <td className='px-6 py-4 text-sm text-gray-300'>
                      <span className='bg-emerald-500/20 px-3 py-1 rounded text-xs font-mono text-emerald-300'>
                        {emp.password}
                      </span>
                    </td>
                    <td className='px-6 py-4 text-sm'>
                      <span className='inline-block bg-blue-500/20 px-3 py-1 rounded text-xs text-blue-300 font-semibold'>
                        {emp.tasks.length} tasks
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  )
}

export default ManageEmployees
