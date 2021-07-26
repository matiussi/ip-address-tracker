import React, { useContext, useEffect, useState} from 'react'
import IPContext from '../context/ip/context'
import {fetchClientIP, fetchIPData} from '../pages/api/api'


const Info: React.FC = () => {

   const {state, setState} = useContext(IPContext)
   const [ip, setIP] = useState<string>('')

   //Getting the client IP, using the useEffect Hook with an empty array "[]" to only execute on the first render
	useEffect(() =>{
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
   //Getting the client IP data, only runs on the first render
   useEffect(() =>{
		const getIPData = async () =>{
         try{
            const ipData = await fetchIPData(ip)
            setState(ipData)
            console.log('ipdata ', ipData)
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
            <p className="loading">Loading... If the information is not displayed, try disabling AD Block.</p>
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