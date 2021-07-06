import axios from 'axios'

//Getting user IP 
// export const getUserIP = async () => {
// 	await axios.get('https://api.ipify.org?format=json'
// 	).then(dataResponse => {
// 		return dataResponse.data
// 	})
// }
// export function ipifyHandler(req, res) {
// 	axios.get(
// 		`https://geo.ipify.org/api/v1?apiKey=at_DbvZDYuR9Yd5TTdgeXkp6Yj3nK6Dp&ipAddress=${req.ip}`
// 	).then(res => {
// 		console.log(res)
// 	})
// }
export default function handler(req, res) {
	res.status(200).json('Olá')
 }
