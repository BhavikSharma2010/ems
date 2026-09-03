import React from 'react'
import Header from '../../other/Header'
import TaskListNumber from '../../other/TaskListNumber'
import TaskList from '../TaskList/TaskList'

const EmployeeDashboard = ({ data, handleLogout }) => {
  return (
    <div className='min-h-screen bg-[#0f0f0f]'>
      <div className='p-10'>
        <Header data={data} handleLogout={handleLogout} />
        <TaskListNumber data={data} />
        <div className='mt-10'>
          <h2 className='text-white text-xl font-semibold mb-4'>Your Tasks</h2>
          <TaskList data={data} />
        </div>
      </div>
    </div>
  )
}

export default EmployeeDashboard
