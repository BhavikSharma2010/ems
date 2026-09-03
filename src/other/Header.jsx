import React from 'react'

const Header = ({ data, handleLogout }) => {
  return (
    <div className='flex items-end justify-between'>
      <h1 className='text-2xl font-medium text-white'>
        Hello <br />
        <span className='text-3xl font-semibold text-white'>
          {data ? data.firstName : 'Admin'} 😀
        </span>
      </h1>
      <button
        onClick={handleLogout}
        className='bg-red-600 text-lg font-medium text-white px-5 py-2 rounded-sm'
      >
        Log Out
      </button>
    </div>
  )
}

export default Header
