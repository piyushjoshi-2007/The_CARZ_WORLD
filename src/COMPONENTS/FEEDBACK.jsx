import React from 'react'

import CARD2 from './CARD2'

function FEEDBACK() {
    const data=[
  {
    "id": 1,
    "name": "Ananya Sharma",
    "feedback": "Carz World made buying my dream BMW so easy! The process was transparent and fast.",
    "rating": 5,
    "profileImage": "https://randomuser.me/api/portraits/women/21.jpg"
  },
  {
    "id": 2,
    "name": "Rohan Mehta",
    "feedback": "I got a certified Mercedes at a great price. Very happy with the customer service.",
    "rating": 4,
    "profileImage": "https://randomuser.me/api/portraits/men/34.jpg"
  },
  {
    "id": 3,
    "name": "Priya Kapoor",
    "feedback": "Excellent platform for luxury cars. Loved the detailed car history provided.",
    "rating": 5,
    "profileImage": "https://randomuser.me/api/portraits/women/45.jpg"
  },
  {
    "id": 4,
    "name": "Vikram Singh",
    "feedback": "Smooth experience, fair pricing, and helpful support team. Highly recommend Carz World.",
    "rating": 4,
    "profileImage": "https://randomuser.me/api/portraits/men/56.jpg"
  },
  {
    "id": 5,
    "name": "Sanya Roy",
    "feedback": "I sold my Audi through Carz World and got a great deal. Very professional!",
    "rating": 5,
    "profileImage": "https://randomuser.me/api/portraits/women/67.jpg"
  },
  {
    "id": 6,
    "name": "Karan Malhotra",
    "feedback": "The car I bought was in perfect condition. Very satisfied with Carz World.",
    "rating": 5,
    "profileImage": "https://randomuser.me/api/portraits/men/12.jpg"
  },
  
 
  
]



  return (
    <>
    
    <p className='text-white mt-25 text-6xl text-center font-bold'><font color='red'>Feed</font>back</p> <br />
 <p className='text-center text-white text'>See ! What are <font color='red'>loved</font> ones think of us :</p>

    <div className=' grid grid-cols-4'>
        {
        data.map((e)=>{
            return <CARD2 key={e.id}  i={e.profileImage} n={e.name} f={e.feedback} r={e.rating} />
        })
    }
    </div>
    
    </>
  )
}

export default FEEDBACK