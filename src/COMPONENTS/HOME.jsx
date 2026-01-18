import React, { useState } from 'react'
import LOGIN from './LOGIN'
import CARD from './CARD'
import Footer from './FOOTER'

function HOME() {
 const [don, setdon] = useState(0)
 

  const data=[
  {
    "id": 1,
    "name": "Tesla Model S",
    "model": "2024",
    "price": 8500000,
    "color": "Red",
    "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 2,
    "name": "BMW M4",
    "model": "2023",
    "price": 9200000,
    "color": "Blue",
    "image": "https://images.unsplash.com/photo-1617531653520-4893f7bbf978?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 3,
    "name": "Audi R8",
    "model": "2022",
    "price": 21000000,
    "color": "Black",
    "image": "https://images.unsplash.com/photo-1605559424843-9e4c228bf1c2?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 4,
    "name": "Mercedes AMG GT",
    "model": "2024",
    "price": 23000000,
    "color": "Grey",
    "image": "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=600&h=400&q=80"
  },
  {
    "id": 5,
    "name": "Lamborghini Huracan",
    "model": "2023",
    "price": 32000000,
    "color": "Yellow",
    "image": "https://images.unsplash.com/photo-1621135802920-133df287f89c?auto=format&fit=crop&w=600&h=400&q=80"
  }
]




  return (
     <> 
     
     <div className='text-white'>
  <p className='text-center mt-55 text-8xl font-bold' >THE <font color='red'>CARZ</font> WORLD</p>
  <p className='text-center pt-2 font-bold text-[16px]'>Your <font color='orangered'>one</font> go car <font color='orangered'>rental</font> service</p>







  <img src="./src/COMPONENTS/car.jpg" alt="" />




    <section>

<p className='text-center text-[47px] mb-20 font-bold'>Our Top Segment</p>


<div className='flex '>
  {data.map((e)=>{
  return <CARD key={e.id} i={e.image} n={e.name} m={e.model} c={e.color} p={e.price} />
})}
</div>

  </section>


{/* sect starts */}
  <section className='mt-35'>
<p className='text-center text-[47px] mt-5 font-bold'>Our Vision</p>
<div className='grid grid-cols-3 gap-8 text-center'>
  <div>
    <p className='text-[32px] mt-5 font-bold'>90 % <br />
    <font color='red'>(Global Market)</font></p>
  </div>


  <div >
    <p className='text-[32px] mt-5 font-bold' > <font color='red'>75 %</font> <br /> (Accuracy) </p>
  </div>


  <div>
    <p className='text-[32px] mt-5 font-bold'>less than 1 % <br /> <font color='red'>(Flaws) </font> </p>
  </div>

</div>
  </section>



{/* sec star */}
  <section className='mt-35'>

    <p className='text-center text-[47px] mt-5 mb-5 font-bold'>Support us</p> <br />
<div className='grid grid-cols-2 gap-8 text-center'>

<div className='text-[32px] font-bold'>
  <p >"Donate Now  <br /> Save Future"</p>
  <p>Current Donation: <font color='red'>$ {don}</font></p>

</div>


<div className=''>
<p className='text-center pb-5'><button onClick={()=>{setdon(don + 10)}} className=' cursor-pointer p-2 rounded-[9px] bg-red-600'>Donate +$10</button></p> <br />

<p className='text-center'><button onClick={()=>{setdon(0)}} className=' cursor-pointer p-2 rounded-[9px] pl-8 pr-8 bg-red-600'>Reset</button></p> <br />
</div>


</div>
<p className='text-center mt-5 mb-35'><button className='cursor-pointer p-2 rounded-[9px] pl-8 pr-8 bg-red-600'>Pay Now</button></p>

  </section>


  
     </div>

     <Footer />
     
     </>
  )
}

export default HOME