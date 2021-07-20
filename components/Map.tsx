import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"
import IPContext from '../context/ip/context'
import React, {useContext, useEffect} from 'react'
import MapChildren from './MapChildren'


const Map = () => {

	const { state } = useContext(IPContext)

	return (
		// <MapContainer 
		// 	center={[state.location.lat, state.location.lng]} 
		// 	zoom={14} 
		// 	scrollWheelZoom={false} 
		// 	style={{ height: "100%", width: "100%" }}>
		// 	<TileLayer
		// 		url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
		// 		attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
		// 	/>
		// 	<Marker
		// 		position={[state.location.lat, state.location.lng]}
		// 		draggable={false}
		// 	>
		// 		<Popup>
		// 			Hey ! you found me
		// 		</Popup>
		// 	</Marker>
		// </MapContainer>
		<MapContainer center={[50.5, 30.5]} zoom={20}>
			{/* According to the docs, the MapContainer props are immutable, 
				the only way to change MapContainer is through its children*/}
      	<MapChildren />
			<TileLayer
          	attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          	url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
    	</MapContainer>
	)
}

export default Map