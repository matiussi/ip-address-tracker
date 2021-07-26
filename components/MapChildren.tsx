import L from "leaflet"
import { useMap} from "react-leaflet"
import IPContext from "../context/ip/context"
import { useContext } from "react"

export const MapChildren: React.FC = () => {

	const { state } = useContext(IPContext)

	//Using the hook map for setting the map proprieties
	const map = useMap()

	setTimeout(function () { map.invalidateSize() }, 400)
	//Setting the location according the state in global context

	if(state){
		map.setView([state.location.lat, state.location.lng])

		//Creating a custom marker icon
		const icon = L.icon({
			iconUrl: 'img/icon-location.svg'
		})
		//Creating a marker and setting its icon
		L.marker([state.location.lat, state.location.lng], { icon: icon }).addTo(map)
	}
	


	return null
}
export default MapChildren