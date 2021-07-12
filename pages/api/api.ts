import axios from 'axios'
import useSWR from 'swr'

//Fetching the client ID using SWR Hook https://swr.vercel.app
export const GetClientIP = async () =>{
	const response = await axios.get('https://api.ipify.org?format=json')
	return {
		props: { clientIP: response.data.ip }
	}
}
export const GetIPInfo = async (clientIP) => {
	const response = await axios.get(`https://geo.ipify.org/api/v1?apiKey=at_DbvZDYuR9Yd5TTdgeXkp6Yj3nK6Dp&domain=${clientIP}`)
	return {
		props: response.data
	}

	// // const {data, error} = useSWR(`https://geo.ipify.org/api/v1?apiKey=at_DbvZDYuR9Yd5TTdgeXkp6Yj3nK6Dp&ipAddress=${clientIP}`)
	// console.log(data)
	// return data ? data : error 
}

