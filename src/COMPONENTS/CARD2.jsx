import React from 'react'

function CARD2(props) {


  
  return (
   <>
   <div className='max-w-45 h-95 w-55 m-5 p-2 rounded-[7px]  text-black bg-white'>
<img className=' rounded-[11px]' src={props.i} alt="" />
<p className=' text-center pt-2 font-bold'>{props.n}</p>
<p className='text-center'>{props.f}</p>
<p className='text-center'>Rating : {props.r}/5</p>


<p className='text-center'><button className='border mt-2 p-2 rounded-lg bg-black text-white text-[13px] cursor-pointer'>View</button></p>
   </div>
   
   
   
   
   
   </>
  )
}

export default CARD2