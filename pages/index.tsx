import SearchBar from "../components/SearchBar"
import Info from "../components/IPInfo"
import { GetClientIP, GetIPInfo} from '../pages/api/api'
import dynamic from 'next/dynamic'
import { useContext, useEffect, useState } from "react"
import GlobalContext from "../context"
import IPContext from "../context/ip/context"
import { GetStaticProps } from "next"
import axios from 'axios'
import IPData from "../types/IPData"

//Getting the client IP on the first page load
export const getStaticProps: GetStaticProps = async () => {
	const { props } = await GetClientIP()
	const response = await GetIPInfo(props.clientIP)
	return response
}

export const Home: React.FunctionComponent<IPData> = (props: IPData) => {

	const {setState: setGlobalState } = useContext(IPContext)

	const [dataFetched, setDataFetched] = useState<IPData>({
		ip: '',
		location: {
			country: '',
			region: '',
			city: '',
			lat: 0,
			lng: 0,
			postalCode: '',
			timezone: '',
			geonameID: 0
		},
		isp: ''
	})

	console.log('props', {props})

	useEffect(() =>{
		if(props){
			setGlobalState(props)
		}
	},[])
	
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
