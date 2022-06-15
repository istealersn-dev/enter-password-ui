import React, { useState } from 'react'
import { BiToggleLeft, BiToggleRight } from 'react-icons/bi'

export default function ToggleSwitch(props) {

/* Setup component state that tracks visibility of the Icon. 
  Initially, we'll set the Icon to visible (toggled true) */
    const [toggled, setToggled] = useState(true)

    /* Define a function that toggles the visibility of the icon */
    const toggleBtn = () => setToggled(!toggled);

  return (
    <div className="flex items-center w-64 mr-2">
        {
            (toggled ? 
            <BiToggleLeft className='lg:w-16 w-8 h-fit text-pmblue inline-block mr-2'onClick={toggleBtn}/> :
            <BiToggleRight className='lg:w-16 w-8 h-fit text-pmblue inline-block mr-2'onClick={toggleBtn}/>)
        }
        <span className='lg:text-base text-xs'>{props.tlabel}</span>
    </div>
  )
}