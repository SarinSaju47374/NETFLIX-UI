import "./App.css"
import Navbar from './components/Navbar/Navbar';
import Banner from "./components/Banner/Banner";
import RowPost from "./components/Row-Post/RowPost";
import { useEffect, useState } from "react";
import axios from "axios";
import { base_url } from "./constants/constants";
 
export default function App(){
    const[genreList,setGenreList]=useState();
    useEffect(()=>{
        axios.get(`${base_url}genre/movie/list?api_key=11f86917618695d13b05d9d36945c96a&language=en-US`)
        .then(response=>setGenreList(response.data))
        .catch(error=>alert(error))
    },[])
    return(
        <div className="app">
            <Navbar/>
            <Banner /> 
            <div className="content">
                {   
                      
                    genreList &&
                    genreList.genres.map((elem,ind)=>
                        <RowPost genres={elem.id} name={elem.name} key={ind}  />
                        
                    )
                }
            </div> 
        </div>
    )
}