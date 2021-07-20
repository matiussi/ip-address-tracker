import React, { useContext, useEffect, useState } from 'react'
import IPContext from '../context/ip/context'
import useSWR from 'swr'
import ipValidation from 'is-ip'
import domainValidation from 'is-valid-domain'
import {fetchIPData} from '../pages/api/api'
import icon from '../public/img/icon-arrow.svg'

const SearchBar: React.FC = () => {

	const [ip, setIp] = useState<string>('')
	const [inputError, setinputError] = useState<boolean>(false)
	const [shouldFetch, setShouldFetch] = useState<boolean>(false)
	const { setState: setGlobalState } = useContext(IPContext)

	const { data } = useSWR(shouldFetch ? ip : null, fetchIPData)

	useEffect(() =>{
		if(data){
			setShouldFetch(false)
			setGlobalState(data)
		}
	}, [data, setGlobalState])

	const handleClick = () => {
		if(ipValidation(ip) || domainValidation(ip)){
			setShouldFetch(true)
			setinputError(false)
		}else{
			setShouldFetch(false)
			setinputError(true)
			setIp('')
		}
	}
	const onChangeHandler = event =>{
		setIp(event.target.value)
	}
	return (
		<div className="search-bar">
			<input
				className={inputError ? "search-bar-input input-input-error" : "search-bar-input"}
				required
				value={ip}
				type="text"
				placeholder={inputError ? 'Invalid IP address or domain' : 'Search for any IP address or domain'}
				onChange={(e) => onChangeHandler(e)}
			/>
			<button className="button" onClick={() => {handleClick()}}>
				<img src='/img/icon-arrow.svg' alt="Search for this IP or domain"/>
			</button>
		</div>
	);
}

export default SearchBar;