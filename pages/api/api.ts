

export const fetchClientIP = async () =>{
	const response = await fetch('https://api.ipify.org?format=json')
	const json = await response.json()
	return json
}
export const fetchIPData = async (clientIP: string) => {
	try{
		const response = await fetch("https://geo.ipify.org/api/v1?apiKey=at_cqCnjuhpCONY5pwifhB8ZlFj2hNnG&domain=" + clientIP)
		const ipData = await response.json()
		console.log('api', ipData)
		return ipData
		
	}catch(err){
		console.log(err)
	}
	
}

