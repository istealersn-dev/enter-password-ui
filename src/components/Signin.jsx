import React from 'react';
import Heading from "../atoms/Heading"
import User from "../atoms/User"
import InputCtrl from '../formctrl/InputCtrl';
import Btn from "../atoms/Btn"
import ToggleSwitch from '../atoms/ToggleSwitch';

import profilePic from "../assets/profile-Sarah.png"

function Signin() {
  return (
    <div className='container w-full md:w-4/5 lg:w-3/4 bg-gray-100 h-screen flex flex-column justify-center items-center'>
        <section className="bg-white xxs:w-11/12 md:w-3/4 h-fit lg:p-20 p-8 rounded-2xl">
            <div>
            <Heading value="Enter your password" />
            <User 
            src={profilePic} alt="Sarah's profile pic" 
            accountType="Business Account" userName="Sarah Bills" 
            />
            <InputCtrl lblvalue="Password" />
            <div className='flex'>
            <ToggleSwitch tlabel="Stay signed in" />
            <Btn value="Continue" />
            </div>
            </div>
        </section>
    </div>
  )
}

export default Signin