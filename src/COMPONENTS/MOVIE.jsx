import React, { useEffect, useState } from 'react'
import axios from 'axios'
import CARD from './CARD'
function MOVIE() {

    
    const API=" http://www.omdbapi.com/?i=tt3896198&apikey=1c12799f&s=titanic&page=1"
const getData=async()=>{
 const res=await axios.get(API)
 console.log(res.data.Search)
 setdata(res.data.Search)
}

const [data, setdata] = useState([])

useEffect(() => {
  getData();

  
}, [])




  return (
    <>
    

   <div className='flex gap-6'>
     {
        data.map((e)=>{
            return <CARD key={e.imdbID} movie={e}/>
        })
    }
   </div>
    
    
    </>
  )
}

export default MOVIE