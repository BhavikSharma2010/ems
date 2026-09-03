import React, { useContext, useState } from 'react'
import Header from '../../other/Header'
import CreateTask from '../../other/CreateTask'
import AllTask from '../../other/AllTask'
import ManageEmployees from '../../other/ManageEmployees'
import { AuthContext } from '../../context/AuthContext'

const AdminDashboard = ({ handleLogout }) => {
  const { employees } = useContext(AuthContext)
  const [activeTab, setActiveTab] = useState('tasks')

  const stats = {
    totalEmployees: employees.length,
    totalTasks: employees.reduce((sum, emp) => sum + emp.tasks.length, 0),
    completedTasks: employees.reduce(
      (sum, emp) => sum + emp.tasks.filter(t => t.completed).length,
      0
    ),
    failedTasks: employees.reduce(
      (sum, emp) => sum + emp.tasks.filter(t => t.failed).length,
      0
    )
  }

  return (
    <div className='min-h-screen w-full bg-[#0f0f0f]'>
      <div className='p-7'>
        <Header handleLogout={handleLogout} />

        <div className='grid grid-cols-4 gap-4 mt-8'>
          <div className='bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg p-6 text-white'>
            <h3 className='text-sm font-medium opacity-80'>Total Employees</h3>
            <p className='text-3xl font-bold mt-2'>{stats.totalEmployees}</p>
          </div>
          <div className='bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg p-6 text-white'>
            <h3 className='text-sm font-medium opacity-80'>Total Tasks</h3>
            <p className='text-3xl font-bold mt-2'>{stats.totalTasks}</p>
          </div>
          <div className='bg-gradient-to-br from-green-600 to-green-700 rounded-lg p-6 text-white'>
            <h3 className='text-sm font-medium opacity-80'>Completed</h3>
            <p className='text-3xl font-bold mt-2'>{stats.completedTasks}</p>
          </div>
          <div className='bg-gradient-to-br from-red-600 to-red-700 rounded-lg p-6 text-white'>
            <h3 className='text-sm font-medium opacity-80'>Failed</h3>
            <p className='text-3xl font-bold mt-2'>{stats.failedTasks}</p>
          </div>
        </div>

        <div className='mt-8 flex gap-4 border-b border-gray-600'>
          <button
            onClick={() => setActiveTab('tasks')}
            className={`px-6 py-3 font-semibold text-sm transition-all ${
              activeTab === 'tasks'
                ? 'text-emerald-500 border-b-2 border-emerald-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Tasks Management
          </button>
          <button
            onClick={() => setActiveTab('employees')}
            className={`px-6 py-3 font-semibold text-sm transition-all ${
              activeTab === 'employees'
                ? 'text-emerald-500 border-b-2 border-emerald-500'
                : 'text-gray-400 hover:text-white'
            }`}
          >
            Employees
          </button>
        </div>

        {activeTab === 'tasks' && (
          <>
            <CreateTask />
            <AllTask />
          </>
        )}

        {activeTab === 'employees' && <ManageEmployees />}
      </div>
    </div>
  )
}

export default AdminDashboard
