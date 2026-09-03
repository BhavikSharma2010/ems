import React, { useContext } from 'react'
import { AuthContext } from '../context/AuthContext'

const getStatusLabel = (task) => {
  if (task.completed) return { label: 'Completed', color: 'bg-green-500' }
  if (task.failed) return { label: 'Failed', color: 'bg-red-500' }
  if (task.newTask) return { label: 'New', color: 'bg-blue-500' }
  if (task.active) return { label: 'In Progress', color: 'bg-yellow-500' }
  return { label: 'Unknown', color: 'bg-gray-500' }
}

const AllTask = () => {
  const { employees } = useContext(AuthContext)

  return (
    <div className='bg-[#1c1c1c] p-5 mt-5 rounded'>
      <h2 className='text-white font-semibold mb-4'>All Tasks</h2>

      <div className='flex justify-between text-xs text-gray-400 mb-3 px-4'>
        <span className='w-1/4'>Employee</span>
        <span className='w-1/3'>Task</span>
        <span className='w-1/5'>Category</span>
        <span className='w-1/6'>Date</span>
        <span className='w-1/6 text-right'>Status</span>
      </div>

      <div className='max-h-64 overflow-y-auto space-y-2 scrollbar-hide'>
        {employees.length === 0 ? (
          <div className='text-center text-gray-400 py-4'>No employees or tasks</div>
        ) : (
          employees.map(emp =>
            emp.tasks.length === 0 ? null : (
              emp.tasks.map((task, i) => {
                const status = getStatusLabel(task)
                return (
                  <div
                    key={`${emp.id}-${i}`}
                    className='flex justify-between items-center bg-[#2a2a2a] hover:bg-[#333] rounded py-3 px-4 text-sm text-white transition-colors'
                  >
                    <span className='w-1/4 font-medium text-gray-200'>{emp.firstName}</span>
                    <span className='w-1/3 text-gray-300'>{task.taskTitle}</span>
                    <span className='w-1/5 text-gray-400'>{task.category}</span>
                    <span className='w-1/6 text-gray-400'>{task.taskDate}</span>
                    <span className='w-1/6 flex justify-end'>
                      <span className={`${status.color} text-white text-xs px-3 py-1 rounded font-medium`}>
                        {status.label}
                      </span>
                    </span>
                  </div>
                )
              })
            )
          )
        )}
      </div>
    </div>
  )
}

export default AllTask
