import React, {createContext, useContext, useState} from "react"
import Loading from '../../types/Loading'

//Types for Props context
type PropsLoadingContext ={
	loading: Loading,
	setLoading: React.Dispatch<React.SetStateAction<Loading>>
}

//Context default values
const DEFAULT_VALUE = {
	loading:{
      status: false,
      message: ''
   
	},
	setLoading: () => {} //Intialing function
}

//Creating the context for Loading
const LoadingContext = createContext<PropsLoadingContext>(DEFAULT_VALUE)

//Creating a custom provider
export const LoadingContextProvider: React.FC = ({children}) =>{
	const [loading, setLoading] = useState(DEFAULT_VALUE.loading)

	return(
		<LoadingContext.Provider
			value={{
				loading,
				setLoading,
			}}
			>
			{children}
		</LoadingContext.Provider>
	)
}
//Creating a custom hook
export const useLoading = () => useContext(LoadingContext)