import { GeolocationContextProvider } from "./geolocation/context"

const GlobalContext: React.FC = ({ children }) =>{
   return (
      <>
         <GeolocationContextProvider>{children}</GeolocationContextProvider>
         
      </>
   )
}

export default GlobalContext