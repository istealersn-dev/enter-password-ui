import React from 'react'

export default function User(props) {
  return (
    <div className="flex flex-row items-center lg:mb-8 mb-4">
        <img 
            src={props.src} alt={props.alt} 
            className="lg:w-20 w-16 h-fit pr-4"
            />
        <div className='text-pmblue'>
            <span className='lg:text-sm text-xxs font-thin'>
                {props.accountType}
                </span>
            <div className='font-bold lg:text-lg text-sm'>
                {props.userName}
                </div>
        </div>
    </div>
  )
}

