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
	console.log('props', {props})
	
		setGlobalState(
			{
				ip: props.ip,
				location: props.location,
				isp: props.isp
			}
		)
	

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
