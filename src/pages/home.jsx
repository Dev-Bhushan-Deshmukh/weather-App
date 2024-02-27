import React, { useEffect, useState } from 'react'
import '../component-style/home.css'
import { Card } from '../components/card';
export const Home = () => {
   

//usestate
const[shif,setShift]=useState('');
const[current,setCurrent]=useState();
const[temp,setTemp]=useState({});
const[location_,setLocation]=useState();
const[instance,setInstance]=useState([]);
const[dayShift,setDayShift]=useState();
const[i,setI]=useState(0)
const[nn,setn]=useState('bb')
useEffect(()=>{
    var event = new Date();
    var time=event.toLocaleTimeString('en-US')
    setDayShift(time.slice(-2))
setCurrent(sty[time.slice(-2)])


// console.log(sty[time.slice(-2)],'xx',sty['AM'])
},[])

let sty={

    "AM":{
        background:"url('https://wallpapercave.com/wp/wp12478737.jpg')",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
        },
        "PM":{
            background:"url('https://img2.wallspic.com/crops/9/2/1/6/6/166129/166129-california_streaming_apple_event_wallpaper_without_logo-6016x3543.jpg')",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover"
        }
} 



async function fetchWeather(){
let xx=`https://api.openweathermap.org/data/2.5/weather?q=${location_},India&APPID=e688ea5e8e4036017b419d8826e392df`

let x=await fetch(xx)
const movies = await x.json();
console.log(movies);
console.log(movies.name);
console.log(movies.main.temp);











setTemp(movies.main)
// addInstance()
let newItem={
    index:i,
    city:movies.name,
temp:movies.main.temp,
mintemp:movies.main.temp_min,
maxTemp:movies.main.temp_max,
humidity:movies.main.humidity,
pressure:movies.main.pressure,
windSpeed:movies.wind.speed,
weather:movies.weather["0"]['description']


}
setInstance((prev)=>[...prev,newItem])
setI(i+1);
}




  return (
    <div className='Home-container' style={current}  >

       <div className='input-container'>
<input  id='search-box' placeholder='City' value={location_} onChange={(e)=>setLocation(e.target.value)} /><button onClick={fetchWeather} id='search-btn'>Search</button>
</div> 

<Card instance_={instance}  shift={dayShift} />

    </div>
  )
}
