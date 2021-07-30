import React, { useEffect, useState } from 'react'
import { fetchClientIP, fetchGeolocationData } from '../pages/api/api'

import { useGeolocation } from '../context/geolocation/context'
import { useLoading } from '../context/loading/context'

const Info: React.FC = () => {

   const { geolocation, setGeolocation } = useGeolocation()
   const { loading, setLoading } = useLoading()

   //Getting the client geolocation data, only runs on the first render
   useEffect(() => {
      setLoading({
         status: true,
         message: 'Loading IPINFO...'
      })
      const getGeolocationData = async () => {
         try {
            //When ipify receives "...&domain=" as parameter it will returns the client geolocation information
            const ipData = await fetchGeolocationData('')
            setGeolocation(ipData)
            setLoading({
               status: false,
              
            })
         } catch (e) {
            console.log(e)
         }
      }
      getGeolocationData()
   }, [])


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
         <div className="info-container">
            {showInfo()}
         </div>
      </>
   );
}

export default Info;