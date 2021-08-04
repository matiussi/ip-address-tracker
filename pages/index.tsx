import SearchBar from "../components/SearchBar"
import Info from "../components/GeolocationInfo"
import dynamic from 'next/dynamic'
import Head from "../components/Head"

import { GeolocationContextProvider } from "../context/geolocation/context"
import {LoadingContextProvider} from '../context/loading/context'

export const Home: React.FC = () => {

	//Loading the Map 
	const Map = dynamic(
		() => import('../components/Map'), 
		{ ssr: false } // This line is important. It's what prevents server-side render
	)
	return (
		<>
			<Head></Head>
			<GeolocationContextProvider>
				
				<main className="content">
					<div className="background">
						<div className="floating">
							<h1 className="title">IP Address Tracker</h1>
							<LoadingContextProvider>
							<SearchBar></SearchBar>
							<Info></Info>
							</LoadingContextProvider>
						</div>
					</div>
					
					<Map/>
				</main>
			</GeolocationContextProvider>
		</>
	)
}
export default Home
