import React, {createContext, useState} from "react"
import IPData from '../../types/IPData'

//Type for Props context
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
			timezone: '',
		},
		isp:''
	},
	setState: () => {} //Intialing function
}

//Creating the context for IPContext
const IPContext = createContext<PropsIPContext>(DEFAULT_VALUE)

/*
	Function that contains the state and
	the function the will change the state 'setState'
	that will provide the context for the children components 

*/

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