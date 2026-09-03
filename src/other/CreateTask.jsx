import React, { useContext, useState } from 'react'
import { AuthContext } from '../context/AuthContext'

const CreateTask = () => {
  const { employees, addTaskToEmployee } = useContext(AuthContext)

  const [taskTitle, setTaskTitle] = useState('')
  const [taskDate, setTaskDate] = useState('')
  const [assignTo, setAssignTo] = useState('')
  const [category, setCategory] = useState('')
  const [description, setDescription] = useState('')
  const [successMessage, setSuccessMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()

    const employee = employees.find(
      emp => emp.firstName.toLowerCase() === assignTo.toLowerCase()
    )

    if (!employee) {
      alert(`No employee found with name "${assignTo}"`)
      return
    }

    const newTask = {
      active: false,
      newTask: true,
      completed: false,
      failed: false,
      taskTitle,
      taskDescription: description,
      taskDate,
      category
    }

    addTaskToEmployee(employee.id, newTask)

    setSuccessMessage(`Task assigned to ${employee.firstName}!`)
    setTimeout(() => setSuccessMessage(''), 3000)

    setTaskTitle('')
    setTaskDate('')
    setAssignTo('')
    setCategory('')
    setDescription('')
  }

  return (
    <div className='p-6 bg-gradient-to-r from-[#1c1c1c] to-[#2a2a2a] mt-8 rounded-lg border border-emerald-500/20'>
      <h2 className='text-white text-xl font-semibold mb-6'>Create New Task</h2>

      {successMessage && (
        <div className='mb-6 p-3 bg-green-500/20 border border-green-500 text-green-300 rounded-lg text-sm'>
          ✓ {successMessage}
        </div>
      )}

      <form onSubmit={handleSubmit} className='flex flex-wrap w-full items-start justify-between gap-6'>
        <div className='w-1/2'>
          <div className='mb-4'>
            <label className='text-sm text-gray-300 mb-1 block'>Task Title</label>
            <input
              value={taskTitle}
              onChange={e => setTaskTitle(e.target.value)}
              required
              className='text-sm py-2 px-3 w-full rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white placeholder-gray-500 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all'
              type='text'
              placeholder='Make a UI Design'
            />
          </div>

          <div className='mb-4'>
            <label className='text-sm text-gray-300 mb-1 block'>Date</label>
            <input
              value={taskDate}
              onChange={e => setTaskDate(e.target.value)}
              required
              className='text-sm py-2 px-3 w-full rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all'
              type='date'
            />
          </div>

          <div className='mb-4'>
            <label className='text-sm text-gray-300 mb-1 block'>Assign To</label>
            <input
              value={assignTo}
              onChange={e => setAssignTo(e.target.value)}
              required
              className='text-sm py-2 px-3 w-full rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white placeholder-gray-500 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all'
              type='text'
              placeholder='Employee name'
              list='employee-names'
            />
            <datalist id='employee-names'>
              {employees.map(emp => (
                <option key={emp.id} value={emp.firstName} />
              ))}
            </datalist>
          </div>

          <div className='mb-4'>
            <label className='text-sm text-gray-300 mb-1 block'>Category</label>
            <input
              value={category}
              onChange={e => setCategory(e.target.value)}
              required
              className='text-sm py-2 px-3 w-full rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white placeholder-gray-500 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all'
              type='text'
              placeholder='Design, Dev, etc'
            />
          </div>
        </div>

        <div className='w-2/5 flex flex-col items-start'>
          <label className='text-sm text-gray-300 mb-1 block'>Description</label>
          <textarea
            value={description}
            onChange={e => setDescription(e.target.value)}
            required
            className='w-full h-44 text-sm py-2 px-3 rounded outline-none bg-[#0f0f0f] border border-emerald-500/30 text-white placeholder-gray-500 focus:border-emerald-500 focus:shadow-lg focus:shadow-emerald-500/20 transition-all resize-none'
            placeholder='Task description...'
          />
          <button
            type='submit'
            className='bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 py-2 px-6 rounded text-sm mt-4 w-full text-white font-semibold transition-all duration-300 transform hover:scale-105 active:scale-95'
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateTask
