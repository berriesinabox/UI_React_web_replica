import React from 'react'
import Leftcontent from './Leftcontent'
import Rightcontent from './Rightcontent'

const Page1content = (props) => {
  console.log(props.users)
  return (
    <div className='pb-16 pt-8 px-18 gap-10 flex h-[90vh] bg-blue-200 justify-between items-center'>
        <Leftcontent/>
        <Rightcontent users={props.users} />
    </div>
  )
}

export default Page1content