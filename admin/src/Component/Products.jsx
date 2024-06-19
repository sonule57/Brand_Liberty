import React from 'react'
import { Link } from 'react-router-dom'
export default function Products (){
  return (
    <div>
        <p> This is Products page </p>
        <Link to="/" className="underLine">go to dashboard</Link>
    </div>
  )
}

