import React from 'react'
import { Link } from 'react-router-dom'

function ABOUT() {

// const data;

  return (
    <>
    <p className='text-center text-white mt-28 text-6xl font-bold'><font color='red'>About</font> Us : <font color='red'>WHO</font> ARE WE</p>
    <p className='text-white ml-20 mr-20 mt-12 mb-12'>Carz World is a premier online platform for buying and selling second-hand luxury cars. The website is designed to connect luxury car enthusiasts with top-quality pre-owned vehicles from renowned brands like BMW, Mercedes-Benz, Audi, Jaguar, and Porsche, making luxury more accessible to buyers.

</p>


<p className='text-center  text-black'><button className='rounded-[9px] text-[15px] mb-5 pt-2 pb-2 pl-3 pr-3 cursor-pointer bg-white'> <Link to='/register'>Register Now</Link> </button></p>
   <div className='grid grid-cols-4 m-5 text-white text-center gap-5'>
   <div>

   <p className='text-4xl font-bold'>Luxury Cars Listed</p> <br />
   <p className='text-2xl font-bold'>1,250+</p>
   </div>


   <div>

   <p className='text-4xl font-bold'>Brands Covered</p> <br />
   <p className='text-2xl font-bold'>185+</p>
   </div>

  <div>

   <p className='text-4xl font-bold'>Happy Customers</p> <br />
   <p className='text-2xl font-bold'>1,110+</p>
   </div>


 <div>

   <p className='text-4xl font-bold'>Customer Rating</p> <br />
   <p className='text-2xl font-bold'>4.8/5</p>
   </div>

   </div>
    </>
  )
}

export default ABOUT