import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const Leftcontent = () => {
  return (
    <div className='h-full w-1/3  text-4xl font-bold flex flex-col justify-between'>
        <div className='p-6'>
            <h3 className='mb-5 leading-tight'>Prospective <br/><span className='text-gray-600'>Customer</span><br/> Segmentation</h3>
            <div className='text-sm  font-light text-black '>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, accusamus quo. Error delectus optio alias nobis nemo consequuntur numquam molestiae.</p>
            </div>
        </div>
        <div className='p-4'>
            <ArrowUpRight  size={50} />
        </div>
    </div>
  )
}

export default Leftcontent