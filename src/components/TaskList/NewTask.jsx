import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'

const NewTask = ({ task, idx, employeeData }) => {
  const { updateEmployeeTask } = useContext(AuthContext)

  if (!employeeData) {
    return null
  }

  const handleAccept = () => {
    try {
      const updated = {
        ...task,
        newTask: false,
        active: true
      }
      updateEmployeeTask(employeeData.id, idx, updated)
    } catch (error) {
      console.error('Error accepting task:', error)
      alert('Failed to accept task. Please try again.')
    }
  }

  return (
    <div className='flex-shrink-0 w-[320px] h-[380px] bg-blue-500 rounded-xl shadow-lg p-5 flex flex-col transform transition-transform hover:scale-105'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='bg-blue-700 text-xs px-3 py-1 rounded text-white font-semibold'>{task.category}</h3>
        <h4 className='text-xs font-medium text-white'>{task.taskDate}</h4>
      </div>

      <h2 className='text-lg font-semibold text-white mb-2 line-clamp-2'>{task.taskTitle}</h2>
      <p className='text-xs text-blue-100 mb-4 flex-grow overflow-hidden line-clamp-4'>{task.taskDescription}</p>

      <button
        onClick={handleAccept}
        className='w-full bg-white text-blue-600 hover:bg-blue-50 font-semibold py-2 px-4 rounded-lg transition-all duration-200 transform active:scale-95 text-sm'
      >
        Accept Task
      </button>
    </div>
  )
}

export default NewTask
