import React, { useContext, useEffect, useState, useRef } from 'react'
import IPContext from '../context/ip/context'
import IPData from "../types/IPData"
import {fetchClientIP, fetchIPData} from '../pages/api/api'


const Info: React.FC = () => {

   const {state, setState} = useContext(IPContext)
   const [ip, setIP] = useState<string>('')

	useEffect(() =>{
     //Getting the client ip for the first render
		const getIP = async () =>{
         try{
            const response = await fetchClientIP()
			   setIP(response)
         }catch(e){
            console.log(e)
         }
			
		}
		getIP()
	},[])
   //Getting the client ip data for the first render
   useEffect(() =>{
		const getIPData = async () =>{
         try{
            const ipData = await fetchIPData(ip)
            setState(ipData)
         }catch(e){
            console.log(e)
         }
		}
      
		getIPData()
   },[])
   
   const showInfo = () =>{
		if(state.ip){
			return (
            <div className="info-container">
               <ul className="info-wrapper">
                  <li className="info-block">
                     <p className="info-title">IP ADDRESS</p>
                     <p className="info-value">{state.ip}</p>
                  </li>
                  <li className="info-block">
                     <p className="info-title">LOCATION</p>
                     <p className="info-value">
                        {state.location.city}, {state.location.region} {state.location.postalCode}
                     </p>
                  </li>
                  <li className="info-block">
                     <p className="info-title">TIMEZONE</p>
                     <p className="info-value">{state.location.timezone}</p>
                  </li>
                  <li className="info-block">
                     <p className="info-title">ISP</p>
                     <p className="info-value">{state.isp}</p>
                  </li>
               </ul>	
            </div>
			)
		}
		return (
         <div className="info-container">
            <h2 className="loading">Loading...</h2>
         </div>
      )
	}
   return ( 
      <>
         {showInfo()}
      </> 
   );
}
 
export default Info;