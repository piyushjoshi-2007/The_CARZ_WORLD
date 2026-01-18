import React, { useState } from 'react'
import './login.css'

import { createBrowserRouter ,Link,NavLink,RouterProvider} from 'react-router-dom'


function LOGIN() {
  


  const [name, setname] = useState('')
  const [pass, setpass] = useState('')

 const frmhandle=(e)=>{
  e.preventDefault();
  setname(' ')
  setpass(' ')
 }


  return (
   <>
   <div className='max-w-100 h-92 bg-white rounded-[9px] m-auto mt-45'>
 
  <p className='text-center pt-5 text-2xl font-bold pb-5'> LOGIN</p>


        <form action="">

          <label  htmlFor="name">
            <input className='w-90 outline-0 ml-5 border p-3 rounded-[9px]'  value={name}  onChange={(e)=>{setname(e.target.value)}} type="text"  id="name" /> <br /> <p className='pl-5' >Username</p>
          </label> <br />

          <label  htmlFor="pass">
            <input className='w-90 outline-0 ml-5 border p-3 rounded-[9px]' value={pass} onChange={(e)=>setpass(e.target.value)} type="text"  id="pass" /> <br /> <p className='pl-5' >Password</p>
          </label>

          <p className='text-center '><button onClick={(e)=>{frmhandle(e)}} className='but1 pl-3 pr-3 pt-1 pb-1 rounded-[9px] cursor-pointer'>Login</button></p>
          <p className='text-center pt-5 text-[11px] cursor-pointer'>  Don't have account ? <b> <u><Link to="/register">Register Now</Link></u> </b></p>




        </form>


   </div>


   </>
  )
}

export default LOGIN