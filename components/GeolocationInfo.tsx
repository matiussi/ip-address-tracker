import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import React, { useEffect } from 'react'

import { useGeolocation } from '../context/geolocation/context'
import { useLoading } from '../context/loading/context'

const Info: React.FC = () => {

   const { geolocation, setGeolocation } = useGeolocation()
   const { loading, setLoading } = useLoading()

   const notify = () =>{
      toast.error("Oops an error ocurred. We couldn't get your geolocation information.", {
			position: toast.POSITION.TOP_CENTER
		})
   }
   //Getting the client geolocation data, only runs on the first render
   useEffect(() => {

      const getGeolocationData = async () => {
         setLoading({
            status: true,
            message: 'Loading... Please wait.'
         })
         try {

            //When ipify receives "...&domain=" as parameter it will returns the client geolocation information
            const response = await axios("https://geo.ipify.org/api/v1?apiKey=at_krM4GPgkgv21BrwYvo3fnQLkq48rY&domain=")
            setGeolocation(response.data)

         } catch (e) {
            notify()
         }
         setLoading({
            status: false,
           
         })
      }
      getGeolocationData()
   }, [setGeolocation, setLoading])

  
   const showInfo = () => {
      if (!loading.status) {
         return (
               <ul className="info-wrapper">
                  <li className="info-block">
                     <p className="info-title">IP ADDRESS</p>
                     <p className="info-value">{geolocation.ip}</p>
                  </li>
                  <li className="info-block">
                     <p className="info-title">LOCATION</p>
                     <p className="info-value">
                        {geolocation.location.city}, {geolocation.location.region} {geolocation.location.postalCode}
                     </p>
                  </li>
                  <li className="info-block">
                     <p className="info-title">TIMEZONE</p>
                     <p className="info-value">{geolocation.location.timezone}</p>
                  </li>
                  <li className="info-block">
                     <p className="info-title">ISP</p>
                     <p className="info-value">{geolocation.isp}</p>
                  </li>
               </ul>
            
         )
      } else {
         return (
            <ul className="info-wrapper">
               <p className="loading">{loading.message}</p>
            </ul>
         )
      }
   }
   return (
      <>
      <div>
        <ToastContainer
			position="top-center"
			autoClose={10000}
			hideProgressBar={false}
			newestOnTop={false}
			closeOnClick
			rtl={false}
			pauseOnFocusLoss
			draggable
			pauseOnHover
		   />
      </div>
         <div className="info-container">
            {showInfo()}
         </div>
      </>
   );
}

export default Info;