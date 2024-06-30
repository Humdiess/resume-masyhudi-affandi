import React from 'react'
import { FaCheck } from 'react-icons/fa'

const Item = () => {
  return (
    <div className="item flex gap-2 items-center">
        <div className="item-icon">
            <FaCheck color='blue' />
        </div>
        <div className="item-content">
            <p className='text-gray-600 font-light'>I am a frontend developer</p>
        </div>
    </div>
  )
}

export default Item