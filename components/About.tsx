import React from 'react'
import Item from './Item'

const About = () => {
  return (
    <div>
        <div className="title divide-y-2 border-b-2 mt-8 py-2">
            <h2 className='text-xl font-semibold'>About Me</h2>
        </div>
        <div className="content mt-4">
            <Item />
        </div>
    </div>
  )
}

export default About