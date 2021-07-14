import { GetClientIP, GetIPInfo } from '../pages/api/api'
import React, { useContext, useEffect, useState } from 'react'
import IPContext from '../context/ip/context'
import useSWR from 'swr'
import axios from 'axios'
import IPData from '../types/IPData'

// export const getStaticProps: GetStaticProps = async () => {
// 	const { state } = useContext(IPContext)
// 	const response = await GetIPInfo(state.ip)
// 	return response

// }

const fetcher = async (url) => {
	const res = await fetch("https://geo.ipify.org/api/v1?apiKey=at_DbvZDYuR9Yd5TTdgeXkp6Yj3nK6Dp&domain=" + url)
	const json = await res.json()
	return json
}
const SearchBar: React.FC = () => {

	const [ip, setIp] = useState<string>()
	const { state, setState: setGlobalState } = useContext(IPContext)
	const [shouldFetch, setShouldFetch] = useState(false)

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

	

	const { data } = useSWR(shouldFetch ? ip : null, fetcher, {
		onSuccess: (data, key, config) => {
			console.log({ data })
		}
	})
	if(data){
		setShouldFetch(false)
		setGlobalState(data)
	}

	// console.log('Data useSWR:', letData)

	const handleClick = () => {
		setShouldFetch(true)
	}
	
	const showInfo = () =>{
		if(state.ip.length > 0){
			return (
				<>
					<h1>Estado IP {ip}</h1>
					<p>Estado Contexto {state.ip}</p>
					<p>ISP {state.isp}</p>
				</>	
			)
		}
		return <h1>Loading...</h1>
	}
	return (
		<>
			{showInfo()}
			
			<input
				type="text"
				placeholder="Search for any IP address or domain"
				onChange={(e) => setIp(e.target.value)}
			/>
			<button onClick={() => {handleClick();
			// setGlobalState(
			// 	{
			// 		ip: dataFetched.ip,
			// 		location: dataFetched.location,
			// 		isp: dataFetched.isp
			// 		})
				}}>
				Confirm
			</button>
		</>
	);
}

export default SearchBar;