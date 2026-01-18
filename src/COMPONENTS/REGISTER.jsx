import React, { useState } from 'react'
import axios from "axios";

import { createBrowserRouter ,Link,RouterProvider} from 'react-router-dom'

function REGISTER() {

 const [rname, setrname] = useState('')
 const [rmail, setrmail] = useState('')
 const [rpass, setrpass] = useState('')

    const frmhandle=async (e)=>{
        
        e.preventDefault();
         try {
//     const res= await axios.post("http://localhost:5000/register", {
//   name: rname,
//   email: rmail,
//   pass: rpass
// });
const res= await axios.post("http://localhost:5000/register",{
  name:rname,
  email:rmail,
  pass:rpass,
})
      // alert(res.data.message);
      alert("Successfully Registered!!!!!")
    } catch (err) {
      alert(err.response?.data?.error || "Something went wrong");
    }
        setrname('')
        setrpass('')
        setrmail('')
    }




  return (
    <>
    
      <div className='max-w-100 h-110 bg-white rounded-[9px] m-auto mt-45'>
 
  <p className='text-center pt-8 text-2xl font-bold pb-8'> CREATE AN ACCOUNT</p>


        <form onSubmit={(e)=>{frmhandle(e)}}>

          <label  htmlFor="rname">
            <input className='w-90 outline-0 ml-5 border p-3 rounded-[9px]' type="text" value={rname}  onChange={(e)=>{setrname(e.target.value)}} id="rname" autoComplete='off' placeholder='Enter your name' /> <br /> <p className='pl-5 text-[14px]' >FULL NAME</p>
          </label> <br />

          <label  htmlFor="rmail">
            <input className='w-90 outline-0 ml-5 border p-3 rounded-[9px]' type="text"  value={rmail} onChange={(e)=>{setrmail(e.target.value)}} id="rmail" autoComplete='off' placeholder='Enter your Mail id' /> <br /> <p className='pl-5 pb-5 text-[14px]' >GMAIL ID</p>
          </label>

          <label  htmlFor="rpass">
            <input className='w-90 outline-0 ml-5 border p-3 rounded-[9px]'  type="text" value={rpass} onChange={(e)=>{setrpass(e.target.value)}} id="rpass" autoComplete='off' placeholder='Enter password' /> <br /> <p className='pl-5 text-[14px]' >PASSWORD</p>
          </label>

          <p className='text-center '><button  className='but1 pl-3 pr-3 pt-1 pb-1 rounded-[9px] cursor-pointer'>Register</button></p>
          <p className='text-center pt-5 text-[11px] cursor-pointer'>already have account ? <b> <u> <Link to="/login">Login now</Link> </u> </b></p>




        </form>


   </div>
    </>
  )
}

export default REGISTER