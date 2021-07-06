import React from 'react'

interface SearchBarProps {
	query: string
}

const SearchBar: React.SFC<SearchBarProps> = () => {
	return (
		<>
			<input placeholder="Search for any IP address or domain"></input>
		</>
	);
}

export default SearchBar;