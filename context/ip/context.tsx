import React, {createContext, useState} from "react"
import IPData from '../../types/IPData'

//Types for Props context
type PropsIPContext ={
	state: IPData,
	setState: React.Dispatch<React.SetStateAction<IPData>>
}

//Context default values
const DEFAULT_VALUE = {
	state:{
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
	setState: () => {} //Intialing function
}

//Creating the context for IPContext
const IPContext = createContext<PropsIPContext>(DEFAULT_VALUE)

//Creating a custom provider
const IPContextProvider: React.FC = ({children}) =>{
	const [state, setState] = useState(DEFAULT_VALUE.state)

	return(
		<IPContext.Provider
			value={{
				state,
				setState,
			}}
			>
			{children}
		</IPContext.Provider>
	)
}
export {IPContextProvider}
export default IPContext