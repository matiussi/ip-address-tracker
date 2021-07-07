import SearchBar from "../components/SearchBar"
import IPInfo from "../components/IPInfo"
import { GetClientIP, GetIPInfo} from '../pages/api/api'
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react"
import useSWR from 'swr'

import {IPProvider}  from "../providers/IPProvider"

export const getStaticProps = async () => {
	const { props } = await GetClientIP()
	const infoIP = await GetIPInfo(props.clientIP)
	return infoIP
}
export default function Home({infoIP}) {

	const [IP, setIP] = useState(null)
	
	const Map = dynamic(
		() => import('../components/Map'), // replace '@components/map' with your component's location
		{ ssr: false } // This line is important. It's what prevents server-side render
	)
	return (
		<>
			<IPProvider>
				<h1>IP ADDRESS TRACKER</h1>
				<h2>{infoIP.ip}</h2>
				<SearchBar></SearchBar>
				<IPInfo></IPInfo>
				<Map />
			</IPProvider>
		</>
	)
}
