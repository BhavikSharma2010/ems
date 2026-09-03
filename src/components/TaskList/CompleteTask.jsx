import React from 'react'

const CompleteTask = ({ task }) => {
  return (
    <div className='flex-shrink-0 w-[320px] h-[380px] bg-green-500 rounded-xl shadow-lg p-5 flex flex-col transform transition-transform hover:scale-105'>
      <div className='flex justify-between items-center mb-4'>
        <h3 className='bg-green-700 text-xs px-3 py-1 rounded text-white font-semibold'>{task.category}</h3>
        <h4 className='text-xs font-medium text-white'>{task.taskDate}</h4>
      </div>

      <h2 className='text-lg font-semibold text-white mb-2 line-clamp-2'>{task.taskTitle}</h2>
      <p className='text-xs text-green-100 mb-4 flex-grow overflow-hidden line-clamp-4'>{task.taskDescription}</p>

      <div className='w-full text-center bg-green-700 text-white font-semibold py-2 rounded-lg text-sm'>
        ✓ Completed
      </div>
    </div>
  )
}

export default CompleteTask
