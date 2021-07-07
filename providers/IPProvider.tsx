import React, { useState } from 'react'

export interface IPProviderProps { }

//Creating the context
export const IPContext = React.createContext({})

export const IPProvider: React.SFC<IPProviderProps> = (props) => {
	const [IP, setIP] = useState()

	return (
      <IPContext.Provider value={{IP, setIP}}>
			{props.children}
		</IPContext.Provider>
     );
}

export const useIP = () => React.useContext(IPContext);