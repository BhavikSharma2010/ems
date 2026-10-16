import React, { useContext, useEffect, useState } from 'react'
import Login from './components/Auth/Login'
import Landing from './components/Landing/Landing'
import EmployeeDashboard from './components/Dashboard/EmployeeDashboard'
import AdminDashboard from './components/Dashboard/AdminDashboard'
import { AuthContext } from './context/AuthContext'

const readSession = () => {
  try {
    return JSON.parse(localStorage.getItem('LoggedInUser'))
  } catch {
    return null
  }
}

const App = () => {
  const [user, setUser] = useState(() => readSession()?.role ?? null)
  const [loggedInEmployeeId, setLoggedInEmployeeId] = useState(
    () => readSession()?.id ?? null
  )
  const [view, setView] = useState('landing')
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
    setView('landing')
    localStorage.removeItem('LoggedInUser')
  }

  const getLoggedInEmployee = () => {
    if (!authData || !loggedInEmployeeId) return null
    return authData.employees.find(e => e.id === loggedInEmployeeId) ?? null
  }

  // A stale restored session (employee id no longer seeded) must not reach
  // the dashboard — log out instead of rendering with null data.
  const employee = user === 'employee' ? getLoggedInEmployee() : null
  useEffect(() => {
    if (user === 'employee' && !employee) handleLogout()
  }, [user, employee])

  return (
    <>
      {!user && view === 'landing' && (
        <Landing
          onLoginClick={() => setView('login')}
          onDemoLogin={handleLogin}
        />
      )}
      {!user && view === 'login' && (
        <Login handleLogin={handleLogin} onBack={() => setView('landing')} />
      )}
      {user === 'admin' && <AdminDashboard handleLogout={handleLogout} />}
      {user === 'employee' && (
        <EmployeeDashboard
          data={employee}
          handleLogout={handleLogout}
        />
      )}
    </>
  )
}

export default App
