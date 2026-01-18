import React from 'react'

function CARD(props) {


  
  return (
   <>
   <div className='max-w-55 h-65 w-55 m-5 p-2 rounded-xs text-black bg-white'>
<img className='rounded-[11px]' src={props.i} alt="" />
<p className=' text-center pt-2 font-bold'>{props.n}</p>
<p className='text-center'>Price : {props.p}</p>
{/* <p className=' text-center'>{props.m}</p> */}
<p className='text-center'>Colour : {props.c}</p>
<p className='text-center'><button className='border  p-2 rounded-lg bg-black text-white text-[13px] cursor-pointer'>Buy Now</button></p>
   </div>
   
   
   
   
   
   </>
  )
}

export default CARD