import { IPContextProvider } from "./ip/context"

const GlobalContext: React.FC = ({ children }) =>{
   return (
      <>
         <IPContextProvider>{children}</IPContextProvider>
      </>
   )
}

export default GlobalContext