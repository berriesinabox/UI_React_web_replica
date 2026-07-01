import { ArrowRight } from 'lucide-react'

const Rightcardcontent = (props) => {
  return (
            <div className='absolute p-5 top-0 left-0 h-full w-full flex flex-col justify-between'>
                <h2 className='bg-white rounded-full font-semibold items-center py-1 h-8 w-8 flex justify-center'>{props.id+1}</h2>
                <div className='text-white'>
                    <p className='text-m leading-relaxed mb-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam a asperiores ab eaque veritatis corrupti!</p>
                    <div className='flex justify-between '>
                        <button style={{backgroundColor:props.color}} className=' text-white font-medium px-3 py-2 rounded-full flex'> {props.tag} </button>
                        <button className=' text-white font-medium px-3 py-2 rounded-full'>
                            <ArrowRight size={25}/>
                        </button>
                    </div>
                </div>
            </div>
  )
}

export default Rightcardcontent