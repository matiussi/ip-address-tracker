// import { GetClientIP, GetIPInfo } from '../pages/api/api'
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

	const [ip, setIp] = useState<string>('')
	const { state, setState: setGlobalState } = useContext(IPContext)
	const [shouldFetch, setShouldFetch] = useState(false)

	const { data } = useSWR(shouldFetch ? ip : null, fetcher, {
		onSuccess: (data, key, config) => {
			console.log({ data })
		}
	})
	
	useEffect(() =>{
		if(data){
			setShouldFetch(false)
			setGlobalState(data)
		}
	})

	const handleClick = () => {
		setShouldFetch(true)
	}
	const onChangeHandler = event =>{
		setIp(event.target.value)
	}
	return (
		<>
			<input
				required
				value={ip}
				type="text"
				placeholder="Search for any IP address or domain"
				onChange={(e) => onChangeHandler(e)}
			/>
			<button onClick={() => {handleClick()}}>
				Confirm
			</button>
		</>
	);
}

export default SearchBar;