import { useState, useEffect } from 'react'
import { AuthContext } from './AuthContext'
import { getLocalStorage, setLocalStorage } from '../utils/LocalStorage'

const AuthProvider = ({ children }) => {
  const [userData, setUserData] = useState(null)

  useEffect(() => {
    setLocalStorage()
    const { employees, admin } = getLocalStorage()
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setUserData({ employees, admin })
  }, [])

  const updateEmployeeTask = (employeeId, taskIndex, updatedTask) => {
    if (!userData) return

    const updated = userData.employees.map(emp => {
      if (emp.id !== employeeId) return emp

      const tasks = emp.tasks.map((t, i) => (i === taskIndex ? updatedTask : t))

      const taskNumber = {
        newTask: tasks.filter(t => t.newTask).length,
        active: tasks.filter(t => t.active && !t.newTask).length,
        completed: tasks.filter(t => t.completed).length,
        failed: tasks.filter(t => t.failed).length
      }

      return { ...emp, tasks, taskNumber }
    })

    localStorage.setItem('employees', JSON.stringify(updated))
    setUserData(prev => ({ ...prev, employees: updated }))
  }

  const addTaskToEmployee = (employeeId, newTask) => {
    if (!userData) return

    const updated = userData.employees.map(emp => {
      if (emp.id !== employeeId) return emp

      const tasks = [...emp.tasks, newTask]
      const taskNumber = {
        newTask: tasks.filter(t => t.newTask).length,
        active: tasks.filter(t => t.active && !t.newTask).length,
        completed: tasks.filter(t => t.completed).length,
        failed: tasks.filter(t => t.failed).length
      }

      return { ...emp, tasks, taskNumber }
    })

    localStorage.setItem('employees', JSON.stringify(updated))
    setUserData(prev => ({ ...prev, employees: updated }))
  }

  if (!userData) {
    return <div />
  }

  return (
    <AuthContext.Provider value={{ ...userData, updateEmployeeTask, addTaskToEmployee }}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
