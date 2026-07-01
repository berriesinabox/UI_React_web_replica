import React from 'react'

const Navbar = () => {
  return (
    <div className='flex items-center justify-between py-5 px-10 font-semibold'>
        <h4 className='bg-black text-white px-4 py-1.5 uppercase rounded-full text-sm '>Target Audience</h4>
        <button className='bg-gray-200 px-3 py-2 uppercase rounded-full text-xs tracking-wider'>Digital Banking Platform</button>
    </div>
  )
}

export default Navbar