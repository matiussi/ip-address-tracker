import { IPContextProvider } from "./ip/context"

const GlobalContext: React.FunctionComponent = ({ children }) =>{
   return (
      <>
         <IPContextProvider>{children}</IPContextProvider>
      </>
   )
}

export default GlobalContext