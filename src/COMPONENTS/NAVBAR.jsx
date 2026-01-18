import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'
function NAVBAR() {
    
  return (
    <>
    
    <div className='text-white font-sans '>
 <nav className='flex list-none gap-7 mt-5 justify-end mr-7 cursor-pointer'>
  <li>  <Link to='/'>Home</Link> </li>
   <li>  <Link to='/about'>About</Link> </li>
   
   <li>  <Link to='/feedback'>Feedback</Link> </li>
   <li>  <Link to='/login'>Login</Link> </li>
   <li>  <Link to='/register'>Sign up</Link></li>
  
 </nav>


    </div>
    
    
    </>
  )
}

export default NAVBAR