import SearchBar from "../components/SearchBar"
import Info from "../components/IPInfo"
// import { GetClientIP, GetIPInfo} from '../pages/api/api'
import dynamic from 'next/dynamic'
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context"
import IPContext from "../context/ip/context"
import IPData from "../types/IPData"
import useSWR from "swr"
import axios from "axios"


export const Home: React.FunctionComponent = () => {

	const {state, setState: setGlobalState } = useContext(IPContext)
	// const [ip, setIP] = useState<string>('')
	
	// useEffect(() =>{
	// 	const getIP = async () =>{
	// 		const response = await fetchClientIP()
	// 		setIP(response)
	// 	}
	// 	getIP()
	// 	const getIPData = async () =>{
	// 		if(ip){
	// 			const ipData = await fetchIPData(ip)
	// 			setGlobalState(ipData)
	// 		}
	// 	}
	// 	getIPData()
		
	// },[])

	// console.log("IP State: ", ip)
	console.log('Context State', state)

	
	const Map = dynamic(
		() => import('../components/Map'), // replace '@components/map' with your component's location
		{ ssr: false } // This line is important. It's what prevents server-side render
	)
	return (
		<>
			<GlobalContext>
				<h1>IP ADDRESS TRACKER</h1>
				<SearchBar></SearchBar>
				<Info></Info>
				<Map />
			</GlobalContext>
		</>
	)
}
export default Home
