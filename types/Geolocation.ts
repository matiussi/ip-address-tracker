type IPData = {
   ip: string,
   location?:{
      country: string,
      region: string,
      city: string,
      lat: number,
      lng: number,
      postalCode: string,
      timezone: string,
      geonameID: number
   }
   isp?: string
}

export default IPData