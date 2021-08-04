import { MapContainer, TileLayer} from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import 'leaflet-defaulticon-compatibility/dist/leaflet-defaulticon-compatibility.css'
import "leaflet-defaulticon-compatibility"
import MapChildren from './MapChildren'


const Map: React.FC = () => {

	return (
		<MapContainer center={[50.5, 30.5]} zoom={17}>
			{/* According to the documentation, the MapContainer props are immutable, 
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