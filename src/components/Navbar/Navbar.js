import React, { useState } from 'react'
import '../Navbar/Navbar.css'
// import netflixImg from '..../public/images/Logonetflix.png'
function Navbar() {
  const[scrolled,setScrolled]=useState(false);
  const[toolTip,setTootTip]=useState(false);
  window.addEventListener('scroll',()=>{
    if(window.scrollY>=80){
      setScrolled(true)
    }else{
      setScrolled(false)
    }
  })
  return (
    <div className={scrolled?"navbar active":"navbar"}>
      <div>
      <img src="https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png" className="netflixLogo"/>
      </div>
      <ul className="list">
        <li><a>Home</a></li>
        <li><a>TV Shows</a></li>
        <li><a>Movies</a></li>
        <li><a>New & Popular</a></li>
        <li><a>My List</a></li>
      </ul>
      <div className="mobList" onClick={()=>setTootTip(!toolTip)}>
        <pre>Browse  <i class={toolTip?"fa-solid fa-caret-up":"fa-solid fa-caret-down"}></i></pre>
        
        <div className="mobListToolTip" style={{display:toolTip?"flex":"none"}}>
          <i class="fa-solid fa-caret-up"></i>
          <ul className="list">
            <li><a>Home</a></li>
            <li><a>TV Shows</a></li>
            <li><a>Movies</a></li>
            <li><a>New & Popular</a></li>
            <li><a>My List</a></li>
          </ul>
        </div>
      </div>
      <ul className="avatar">
        <li><img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" style={{borderRadius:"5px",cursor:"pointer"}} /></li>
      </ul>
    </div>
  )
}

export default Navbar
