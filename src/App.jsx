import React, { useContext, useState } from 'react'
import Login from './components/Auth/Login'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthContext'

const App = () => {
  const [user, setUser] = useState(null)
  const [loggedInEmployeeId, setLoggedInEmployeeId] = useState(null)
  const authData = useContext(AuthContext)

  const handleLogin = (email, password) => {
    if (!authData) return

    const adminUser = authData.admin.find(a => a.email === email && a.password === password)
    if (adminUser) {
      setUser('admin')
      setLoggedInEmployeeId(null)
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'admin' }))
      return
    }

    const employee = authData.employees.find(e => e.email === email && e.password === password)
    if (employee) {
      setUser('employee')
      setLoggedInEmployeeId(employee.id)
      localStorage.setItem('LoggedInUser', JSON.stringify({ role: 'employee', id: employee.id }))
      return
    }

    alert('Invalid credentials')
  }

  const handleLogout = () => {
    setUser(null)
    setLoggedInEmployeeId(null)
    localStorage.removeItem('LoggedInUser')
  }

  const getLoggedInEmployee = () => {
    if (!authData || !loggedInEmployeeId) return null
    return authData.employees.find(e => e.id === loggedInEmployeeId)
  }

  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDashboard handleLogout={handleLogout} />}
      {user === 'employee' && (
        <EmployeeDashboard
          data={getLoggedInEmployee()}
          handleLogout={handleLogout}
        />
      )}
    </>
  )
}

export default App
