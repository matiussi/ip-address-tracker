type IP ={
   ip: string
}
type IPStateProps ={
   ip: string,
	setIp: React.Dispatch<React.SetStateAction<IP>>
}

export default IPStateProps