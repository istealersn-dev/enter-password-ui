import React, { useState } from 'react'

import eye from '../assets/eye.svg'
import eyeOff from '../assets/eye-off.svg'

export default function InputCtrl(props) {

  /* Setup component state that tracks visibility of the image. 
  Initially, we'll set the image to visible (toggled true) */
  const [toggled, setToggled] = useState(true)

  /* Define a function that toggles the visibility of the image */
  const toggleImage = () => setToggled(!toggled);

  return (
    <div className="text-pmblue lg:mb-8 mb-4">
        <label className="block">
            <span className="font-semibold lg:text-sm text-xs">{props.lblvalue}</span>
            <div className="flex lg:w-4/5 xl:w-4/6 w-full mt-2">
            <input 
            type={(toggled) ? "password" : "text"} name="password" 
            className="lg:h-14 h-6 rounded w-full lg:w-96 mr-4 p-4 text-xs lg:text-base"/>
            <img src={(toggled) ? eyeOff : eye} alt="Eye symbol" className='lg:w-8 w-4' onClick={toggleImage}/>
            </div>
        </label>
    </div>
  )
}

