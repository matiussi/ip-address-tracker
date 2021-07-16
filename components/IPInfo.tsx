import React, { useContext, useEffect, useState, useRef } from 'react'
import IPContext from '../context/ip/context'
import IPData from "../types/IPData"
import {fetchClientIP, fetchIPData} from '../pages/api/api'
const Info: React.FC = () => {

   const {state, setState} = useContext(IPContext)
   const [ip, setIP] = useState<string>('')
	const isFirstRun = useRef(true);

	useEffect(() =>{
     
		const getIP = async () =>{
			const response = await fetchClientIP()
			setIP(response)
         console.log(ip)
		}
		
		const getIPData = async () =>{
			if(ip){
            const ipData = await fetchIPData(ip)
				setState(ipData)
            console.log('ip state ok...')
			}
		}
      getIP()
		getIPData()
		
	},[])
   const showInfo = () =>{
		if(state.ip){
			return (
				<>
					<p>Estado Contexto {state.ip}</p>
					<p>ISP {state.isp}</p>
				</>	
			)
		}
		return <h1>Loading...</h1>
	}
   return ( 
      <>
         <h1>Context InfoIP {state.ip}</h1>
         {showInfo()}
         {/* <p>city{state.location.city}</p>
         <p>country{state.location.country}</p>
         <p>timezone{state.location.timezone}</p> */}
      </> 
   );
}
 
export default Info;