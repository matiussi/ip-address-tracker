import React, { useContext, useState } from 'react'
import IPContext from '../context/ip/context'
import IPData from "../types/IPData"

const Info: React.FC = () => {

   const {state} = useContext(IPContext)
   return ( 
      <>
         <h1>Context InfoIP {state.ip}</h1>
         {/* <p>city{state.location.city}</p>
         <p>country{state.location.country}</p>
         <p>timezone{state.location.timezone}</p> */}
      </> 
   );
}
 
export default Info;