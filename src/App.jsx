import React from 'react'
import Section1 from './components/section 1/Section1';
import Section2 from './components/section 2/Section2';

const App = () => {

  const users = [
    { 
      img: 'https://plus.unsplash.com/premium_photo-1661757403301-ae68e1f1b827?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8d29ya2luZyUyMHByb2Zlc3Npb25hbHMlMjB2ZXJ0aWNhbCUyMGltYWdlfGVufDB8fDB8fHww',
      intro: '',
      tag: 'Satisfied',
      color:'red'
    },
    { 
      img: 'https://plus.unsplash.com/premium_photo-1661769159995-f3af0089875f?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8d29ya2luZ3xlbnwwfHwwfHx8MA%3D%3D',
      intro: '',
      color:'black',
      tag: 'Underserved'
    },
    { 
      img: 'https://plus.unsplash.com/premium_photo-1661284860596-cfec12a54758?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTkyfHx3b3JrfGVufDB8fDB8fHww',
      intro: '',
      color:'lightseagreen',
      tag: 'Understanding'
    },
    { 
      img: 'https://plus.unsplash.com/premium_photo-1668383207188-f5474588d674?w=1000&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtpbmd8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color:'pink',
      tag: 'Underbanked'
    },
    { 
      img: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHdvcmt8ZW58MHx8MHx8fDA%3D',
      intro: '',
      color:'orange',
      tag: 'Determined'
    }
  ]
  return (
    <div>
      <Section1 users= {users} />
      <Section2/>
    </div>
  )
}

export default App