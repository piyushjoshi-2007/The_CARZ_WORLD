import React from 'react'
import './App.css'

import { createBrowserRouter ,RouterProvider} from 'react-router-dom'
import HOME from './COMPONENTS/HOME'
import LOGIN from './COMPONENTS/LOGIN'
import REGISTER from './COMPONENTS/REGISTER'
import NAVBAR from './COMPONENTS/NAVBAR'
import ABOUT from './COMPONENTS/ABOUT'

import FEEDBACK from './COMPONENTS/FEEDBACK'

function App() {




  const router = createBrowserRouter([
    {
      path:"/",
      element: <div>
        <NAVBAR />
        <HOME />
      </div>
    },
    {
      path:"/login",
      element: <div>
         <NAVBAR />
        <LOGIN />
      </div>

    },
     {
      path:"/register",
      element: <div>
         <NAVBAR />
        <REGISTER />
      </div>

    },
    {
      path:"/about",
      element: <div>
         <NAVBAR />
        <ABOUT />
      </div>

    },
    {
      path:"/feedback",
      element: <div>
         <NAVBAR />
       <FEEDBACK />
      </div>

    },




  ])
  return (
   <>
   
 <RouterProvider router={router} />




   
   </>
  )
}

export default App