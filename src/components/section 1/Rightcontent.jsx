import React from 'react'
import Rightcard from './Rightcard'

const Rightcontent = (props) => {
  console.log(props.users)
  return (
    <div id='right' className='h-full p-6 w-2/3 flex gap-10 overflow-x-auto rounded-4xl'>
      {props.users.map(function(elem , idx){

        return <Rightcard key={idx} color={elem.color} id={idx} img={elem.img} tag={elem.tag} />
      })}
    </div>
  )
}

export default Rightcontent