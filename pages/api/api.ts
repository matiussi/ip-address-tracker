import axios from 'axios'
import useSWR from 'swr'

export const fetchClientIP = async () =>{
	const response = await fetch('https://api.ipify.org?format=json')
	const json = await response.json()
	return json
}
export const fetchIPData = async (clientIP: string) => {
	const res = await fetch("https://geo.ipify.org/api/v1?apiKey=at_DbvZDYuR9Yd5TTdgeXkp6Yj3nK6Dp&domain=" + clientIP)
	const json = await res.json()
	return json
}