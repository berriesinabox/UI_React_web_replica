import { ArrowRight } from 'lucide-react'
import Rightcardcontent from './Rightcardcontent'

const Rightcard = (props) => {
  return (
    <div className='h-full overflow-hidden relative w-60  rounded-4xl flex shrink-0'>
        <img className='h-full  w-full object-cover' src={props.img} alt='working professionals' />
        <Rightcardcontent color={props.color} id={props.id} tag={props.tag} />
    </div>
  )
}

export default Rightcard