import React from 'react'

export default function Heading(props) {
  return (
    <h1 className="font-bold text-xl lg:text-3xl lg:mb-8 mb-4">
        {props.value}
    </h1>
  )
}