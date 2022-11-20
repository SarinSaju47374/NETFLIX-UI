import React, { useEffect, useState } from 'react'
import '../Banner/Banner.css'
import { apiKey, base_url ,image_url} from '../../constants/constants';
import axios from 'axios'
 
function Banner() {
  const [trends,setTrends]=useState();
  useEffect(()=>{
    axios.get(`${base_url}trending/all/week?api_key=${apiKey}`)
    .then((response)=>{
      setTrends(response.data)
      // console.log(response.data.results[0].poster_path)
    })  
    .catch(error=>alert(error))
  },[]);
  function handleChange(){
    alert(image_url+trends.results[0].backdrop_path)
  }
  return (trends &&
    <div className="banner">
      <img src={image_url+trends.results[0].backdrop_path} style={{width:"100%"}}/>
      <div className='movie-det'>
        <div className="movie-title">{trends.results[0].title}</div>
        <div className="desc"></div>
        <button className="play-btn btn"><i class="fa-solid fa-play"></i>Play</button>
        <button className="list-btn btn">More Info</button>
      </div>
      <div className="banner-shd"></div>   
    </div>
  )
}

export default Banner