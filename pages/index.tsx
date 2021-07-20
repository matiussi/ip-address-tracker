import SearchBar from "../components/SearchBar"
import Info from "../components/IPInfo"
import dynamic from 'next/dynamic'
import GlobalContext from "../context"



export const Home: React.FunctionComponent = () => {

	
	const Map = dynamic(
		() => import('../components/Map'), // replace '@components/map' with your component's location
		{ ssr: false } // This line is important. It's what prevents server-side render
	)
	return (
		<>
			<GlobalContext>
				<main className="content">
					<div className="background"></div>
					<div className="floating">
						<h1 className="title">IP Address Tracker</h1>
						<SearchBar></SearchBar>
						<Info></Info>
					</div>
					<Map/>
				</main>
			</GlobalContext>
		</>
	)
}
export default Home
