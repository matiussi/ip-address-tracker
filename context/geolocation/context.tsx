import React, {createContext, useContext, useState} from "react"
import Geolocation from '../../types/Geolocation'

//Types for Props context
type PropsGeolocationContext ={
	geolocation: Geolocation,
	setGeolocation: React.Dispatch<React.SetStateAction<Geolocation>>
}

//Context default values
const DEFAULT_VALUE = {
	geolocation:{
		ip: '',
		location:{
			country: '',
			region: '',
			city: '',
			lat: 0,
			lng: 0,
			postalCode: '',
			timezone: '',
			geonameID: 0
		},
		isp:''
	},
	setGeolocation: () => {} //Intialing function
}

//Creating the context
const GeolocationContext = createContext<PropsGeolocationContext>(DEFAULT_VALUE)

//Creating a custom provider
const GeolocationContextProvider: React.FC = ({children}) =>{
	const [geolocation, setGeolocation] = useState(DEFAULT_VALUE.geolocation)

	return(
		<GeolocationContext.Provider
			value={{
				geolocation,
				setGeolocation,
			}}
			>
			{children}
		</GeolocationContext.Provider>
	)
}
export {GeolocationContextProvider}
export default GeolocationContext
export const useGeolocation = () => useContext(GeolocationContext)