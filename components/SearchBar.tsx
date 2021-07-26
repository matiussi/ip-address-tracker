import React, { useContext, useEffect, useState } from 'react'
import IPContext from '../context/ip/context'
import useSWR from 'swr'
import ipValidation from 'is-ip'
import domainValidation from 'is-valid-domain'
import {fetchIPData} from '../pages/api/api'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const SearchBar: React.FC = () => {

	const [ip, setIp] = useState<string>('')
	// const [inputError, setinputError] = useState<boolean>(false)
	const [shouldFetch, setShouldFetch] = useState<boolean>(false)
	const { setState: setGlobalStateIP } = useContext(IPContext)
	
	const notify = () =>{
		toast.error("Invalid IP address or domain!", {
			position: toast.POSITION.TOP_CENTER
		 })
	} 

	//Using SWR Hook and conditionally fetching data to avoid unecessary requests
	//The state "shouldFetch" is used to control when the data fetching should occur
	const { data, error } = useSWR(shouldFetch ? ip : null, fetchIPData)

	//useEffect is use to check when the fetched data have changed
	//If the object data has content means the request was successfull, then pass the data content to the global state
	useEffect(() =>{
		if(data){
			if(data.code >= 400 && data.code <= 600){
				notify()
			}else{
				setShouldFetch(false)
				setGlobalStateIP(data)
			}
		}
	}, [data, setGlobalStateIP])

	const handleClick = () => {
		if(ipValidation(ip) || domainValidation(ip)){
			setShouldFetch(true)
			// setinputError(false)
			
		}else{
			setShouldFetch(false)
			// setinputError(true)
			setIp('')
			notify()
		}
	}
	const onChangeHandler = event =>{
		setIp(event.target.value)
	}
	return (
		<>
		<div>
        <ToastContainer
			position="top-center"
			autoClose={5000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		   />
      </div>
		<div className="search-bar">
			<input
				// className={inputError ? "search-bar-input input-error" : "search-bar-input"}
				className="search-bar-input"
				required
				value={ip}
				type="text"
				// placeholder={inputError ? 'Invalid IP address or domain' : 'Search for any IP address or domain'}
				placeholder='Search for any IP address or domain'
				onChange={(e) => onChangeHandler(e)}
			/>
			<button className="button" onClick={() => {handleClick()}}>
				<img src='/img/icon-arrow.svg' alt="Search for this IP or domain"/>
			</button>
		</div>
		</>
	);
}

export default SearchBar;