import React from 'react'
import './Spinner.css'

const Spinner = () => {
  return (
    <div className='h-[75vh] flex flex-col items-center space-y-2 justify-center'>
      <div className='spinner'></div>
      <p className='text-bleck text-lg font-semibold'>Loading...</p>
    </div>
  )
}

export default Spinner
