import axios from 'axios'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import ipValidation from 'is-ip'
import domainValidation from 'is-valid-domain'
import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import icon from '../public/img/icon-arrow.svg'

import { useGeolocation } from '../context/geolocation/context'
import { useLoading } from '../context/loading/context'

const SearchBar: React.FC = () => {

	/* 
		To prevent multiple requests two states are used:
			- "query" state is used to store the current input values (onChange);
			- "search" state will be used as an API parameter;
		When the button is clicked, "search" state will receive the current 
		"query" value 
	*/
	const [query, setQuery] = useState<string>('')
	const [search, setSearch] = useState<string>('')
	
	//Consuming the custom hooks
	const { setGeolocation } = useGeolocation()
	const { setLoading } = useLoading()
	
	//Using toastify to display feedback messages
	//https://fkhadra.github.io/react-toastify
	const notify = (type: string) =>{
		if(type === 'info'){
			toast.info("Invalid IP address or domain!", {
				position: toast.POSITION.TOP_CENTER
			})
		}
		if(type ==='error'){
			toast.error("Oops an error ocurred. Please try again later.", {
			position: toast.POSITION.TOP_CENTER
			})
		}
	} 
	
	//Using useEffect hook to monitor the search state, whenever the button is clicked the search state will change
	useEffect(() =>{
		//On the first render a notification was triggered,
		 //to avoid it I needed to create this if (I dont' know if is the best solution)
		if(search === ''){
			return
		}
		const fetchData = async () =>{
			
			//Checking if the user has entered an IP or domain on the correct format
			if(ipValidation(search) || domainValidation(search)){

				//To provide a feedback for the user when the data is being fetched, a loading message is displayed
				//If you want to use a loading, don't forget to use it outside the try/catch block, 
				//otherwise your application will freeze when an error occurs
				setLoading({
					status: true,
					message: `Getting the geoinformation of ${search}` 
				})
				
				try{

					//Fetching the data and storing it in the geolocation context
					const response = await axios("https://geo.ipify.org/api/v1?apiKey=at_krM4GPgkgv21BrwYvo3fnQLkq48rY&domain=" + search)
					setGeolocation(response.data)

				}catch(e){
					notify('error')
				}
				setLoading({
					status: false
				})
	
			}else{
				notify('info')
			}
		}
		fetchData()
	}, [search, setGeolocation, setLoading])

	return (
		<>
		<div className="search-bar">
			<input
				className="search-bar-input"
				required
				value={query}
				type="text"
				placeholder='Search for any IP address or domain'
				onChange={(e) => setQuery(e.target.value)}
			/>
			<button className="button" onClick={() => setSearch(query)}>
				<Image src={icon} alt="Search for this IP or domain"/>
			</button>
		</div>
		</>
	);
}

export default SearchBar