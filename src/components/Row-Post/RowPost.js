import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { image_url } from '../../constants/constants';
import "../Row-Post/RowPost.css"
function RowPost(props) {
  const[movies,setMovies]=useState();
  useEffect(()=>{
     axios.get(`https://api.themoviedb.org/3/discover/movie?api_key=11f86917618695d13b05d9d36945c96a&language=en-US&with_genres=${props.genres}`)
     .then(response=>setMovies(response.data))
     .catch(error=>alert(error))
  },[])
  return (movies &&
    <div className="row">
      <div className="title">
        {props.name}
      </div>
      <div className="posters">
        { 
          movies.results.map((elem)=>
            <img src={image_url+elem.backdrop_path} className="poster"/>
          )
        }
        
        {/* <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/>
        <img src="https://images6.alphacoders.com/112/1121126.jpg" className="poster"/> */}
      </div>
    </div>
  )
}

export default RowPost
