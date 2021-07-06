import SearchBar from "../components/SearchBar"
import IPInfo from "../components/IPInfo"
// import { ipifyHandler, getUserIP } from '../pages/api/api'
import dynamic from 'next/dynamic'
import { useEffect, useState } from "react"
import useSWR from 'swr'

const fetcher = (url) => (url)
	.then((res) => {
		res.json()
	})
export default function Home() {

	const [IP, setIP] = useState()

	const {data, error} = useSWR('pages/api/api')

	if (error) return <div>Failed to load</div>
	if (!data) return <div>Loading...</div>

	const Map = dynamic(
		() => import('../components/Map'), // replace '@components/map' with your component's location
		{ ssr: false } // This line is important. It's what prevents server-side render
	)
	return (
		<>
			<h1>IP ADDRESS TRACKER</h1>
			<SearchBar query=""></SearchBar>
			<IPInfo></IPInfo>
			<Map />
		</>
	)
}
