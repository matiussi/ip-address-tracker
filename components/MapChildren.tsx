import L from "leaflet"
import { useMap} from "react-leaflet"
import { useContext } from "react"

import IPContext, { useGeolocation } from "../context/geolocation/context"

export const MapChildren: React.FC = () => {

	const { geolocation } = useGeolocation()

	//Using the hook map for setting the map proprieties
	const map = useMap()

	setTimeout(function () { map.invalidateSize() }, 400)
	//Setting the location according the geolocation in global context

	if(geolocation){
		map.setView([geolocation.location.lat, geolocation.location.lng])

		//Creating a custom marker icon
		const icon = L.icon({
			iconUrl: 'img/icon-location.svg'
		})
		//Creating a marker and setting its icon
		L.marker([geolocation.location.lat, geolocation.location.lng], { icon: icon }).addTo(map)
	}
	


	return null
}
export default MapChildren