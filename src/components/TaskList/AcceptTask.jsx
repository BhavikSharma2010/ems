import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const AcceptTask = ({ task, idx, employeeData }) => {
  const { updateEmployeeTask } = useContext(AuthContext)

  if (!employeeData) {
    return null
  }

  const markCompleted = () => {
    try {
      const updated = {
        ...task,
        active: false,
        completed: true,
        failed: false
      }
      updateEmployeeTask(employeeData.id, idx, updated)
    } catch (error) {
      console.error('Error completing task:', error)
      alert('Failed to complete task. Please try again.')
    }
  }

  const markFailed = () => {
    try {
      const updated = {
        ...task,
        active: false,
        completed: false,
        failed: true
      }
      updateEmployeeTask(employeeData.id, idx, updated)
    } catch (error) {
      console.error('Error marking task as failed:', error)
      alert('Failed to mark task. Please try again.')
    }
  }

  return (
    <div className='flex-shrink-0 w-[320px] h-[380px] bg-yellow-400 rounded-xl shadow-lg p-5 flex flex-col transform transition-transform hover:scale-105'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='bg-yellow-600 text-xs px-3 py-1 rounded text-white font-semibold'>{task.category}</h3>
        <h4 className='text-xs font-medium text-gray-800'>{task.taskDate}</h4>
      </div>

      <h2 className='text-lg font-semibold text-gray-800 mb-2 line-clamp-2'>{task.taskTitle}</h2>
      <p className='text-xs text-gray-700 mb-4 flex-grow overflow-hidden line-clamp-4'>{task.taskDescription}</p>

      <div className='flex gap-2 mt-auto'>
        <button
          onClick={markCompleted}
          className='flex-1 bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 transform active:scale-95 text-xs'
        >
          ✓ Complete
        </button>
        <button
          onClick={markFailed}
          className='flex-1 bg-red-500 hover:bg-red-600 text-white font-semibold py-2 px-3 rounded-lg transition-all duration-200 transform active:scale-95 text-xs'
        >
          ✗ Failed
        </button>
      </div>
    </div>
  )
}

export default AcceptTask
