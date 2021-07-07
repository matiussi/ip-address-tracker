import React from 'react'
import {useIP} from '../providers/IPProvider'

interface SearchBarProps {}

const SearchBar: React.SFC<SearchBarProps> = () => {
	
	const  {IP, setIP} = useIP()

	const handleChange = (e) =>{
		
	}
	return (
		<>
			<input 
				placeholder="Search for any IP address or domain" 
				onChange={(e) => handleChange(e)}
				
			/>
		</>
	);
}

export default SearchBar;