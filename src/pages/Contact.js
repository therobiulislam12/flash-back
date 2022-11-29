import React from 'react'
import useTitles from '../hooks/useTitles'

const Contact = () => {
  useTitles('Contact Us')
  return (
    <div className='container mx-auto py-12 lg:py-20 text-center'>
        <h1 className="text-2xl font-bold">Contact Us</h1>
    </div>
  )
}

export default Contact