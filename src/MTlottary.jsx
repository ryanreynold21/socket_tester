import axios from 'axios';
import React, { useEffect, useState } from 'react'

const MTlottary = () => {
  const [number,setNumber] = useState('')
  const config = {
    headers: {
      'X-RapidAPI-Key': '1ed20dbf8dmsh9c77d004fdf89b3p12b0efjsnfa6ee265f163',
      'X-RapidAPI-Host': 'myanmar-all-in-one-2d-results.p.rapidapi.com'
    }
  };
  const url ='https://myanmar-all-in-one-2d-results.p.rapidapi.com/api/v1/live';



  const options = {
    method: 'GET',
    url: 'https://myanmar-all-in-one-2d-results.p.rapidapi.com/api/v1/live',
    headers: {
      'X-RapidAPI-Key': '1ed20dbf8dmsh9c77d004fdf89b3p12b0efjsnfa6ee265f163',
      'X-RapidAPI-Host': 'myanmar-all-in-one-2d-results.p.rapidapi.com'
    }
  };
  const getNunber = async () => {
    const {data} = await axios.request(options);
   setNumber(data)
  }

// try {
// 	const response = await axios.request(options);
// 	console.log(response.data);
// } catch (error) {
// 	console.error(error);
// }

useEffect(() => {
  getNunber()
  console.log(number)
},[])
  return (
    <div>
      
    </div>
  )
}

export default MTlottary
