import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"
import IPContext from '../context/ip/context'
import React, {useContext} from 'react'

const Map = () => {

	const { state } = useContext(IPContext)

	return (
		<MapContainer center={[40.8054, -74.0241]} zoom={14} scrollWheelZoom={false} style={{ height: "100%", width: "100%" }}>
			<TileLayer
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
				attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
			/>
			<Marker
				position={[40.8054, -74.0241]}
				draggable={false}
			>
				<Popup>
					Hey ! you found me
				</Popup>
			</Marker>
		</MapContainer>
	)
}

export default Map