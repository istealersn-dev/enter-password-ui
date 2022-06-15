import React from 'react'

export default function Btn(props) {

  return (
    <button 
    className='bg-pmblue font-thin lg:text-base text-xs text-white lg:p-4 p-3 rounded-lg'>
        {props.value}
        </button>
  )
}

