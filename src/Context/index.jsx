

import { createContext } from "react";


export const Bcontext=createContext();


export const BProvider=({children})=>{
    const name="rahuk";



     return <Bcontext.Provider value={name}>
{children}
    </Bcontext.Provider>

}