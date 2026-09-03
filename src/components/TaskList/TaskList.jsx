import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const TaskList = ({ data }) => {
  if (!data || !data.tasks) {
    return (
      <div className='text-center text-gray-400 mt-10'>
        No tasks available
      </div>
    )
  }

  return (
    <div className='h-[50%] w-full flex items-center overflow-x-auto justify-start mt-10 py-5 gap-5 flex-nowrap scrollbar-hide' id='tasklist'>
      {data.tasks.map((task, idx) => {
        if (task.newTask) {
          return <NewTask key={`new-${idx}`} task={task} idx={idx} employeeData={data} />
        }
        if (task.active) {
          return <AcceptTask key={`active-${idx}`} task={task} idx={idx} employeeData={data} />
        }
        if (task.completed) {
          return <CompleteTask key={`completed-${idx}`} task={task} />
        }
        if (task.failed) {
          return <FailedTask key={`failed-${idx}`} task={task} />
        }
        return null
      })}
    </div>
  )
}

export default TaskList
