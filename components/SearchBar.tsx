import { GetClientIP, GetIPInfo} from '../pages/api/api'
import React, { useContext, useState } from 'react'
import IPContext from '../context/ip/context'
import { GetStaticProps } from 'next'


export const getStaticProps: GetStaticProps = async () => {
	const { state } = useContext(IPContext)
	const response = await GetIPInfo(state.ip)
	return response
	
}
type ipType ={
	ip: string
}
const SearchBar: React.FC = () => {
	
	const [ip, setIp] = useState<string>()
	
	const { state, setState: setGlobalState } = useContext(IPContext)

	const handleClick = () =>{
		console.log("click", state)
		setGlobalState({
			ip: ip,
			location: state.location,
			isp: state.isp
		})
	}
	return (
		<>
			<h1>{ip}</h1>
			<p>{state.ip}</p>
			<p>{state.isp}</p>
			<input
				type="text"
				placeholder="Search for any IP address or domain" 
				onChange={(e) => setIp(e.target.value)}
			/>
			<button onClick={() => handleClick()}>
				Confirm
			</button>
		</>
	);
}

export default SearchBar;