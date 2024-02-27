import React, { useEffect } from 'react'
import '../component-style/card.css'
import { useState } from 'react';
import  weather from '../assets/Group 20.svg'
import  cold from '../assets/Group 11.svg'
import  up from '../assets/Group 22.svg'
import  down from '../assets/Group 23.svg'
import  humidity from '../assets/Group 18.svg'
import  pressure from '../assets/Group 16.svg'
import  speed from '../assets/Group 17.svg'
import  evening from '../assets/Group 27.svg'
export const Card = (instance_) => {
    console.log("xxxxx",instance_.shift,instance_.instance_)
let weatherIcon={
PM:evening,
AM:weather


}
const[shift,setShift]=useState();
const[rend,setRend]=useState(true);
    useEffect(()=>{

        setInstance(instance_.instance_)
        // console.log("0000",instance_.instance_[0]['shift'])
        setShift(weatherIcon[instance_.shift])

    },[instance_.instance_])
    const[instance,setInstance]=useState([instance_.instance_]);
   

     const  refresh=async (e)=>{
    
console.log( e.target.getAttribute('data-d'))
    
console.log( e.target.getAttribute('data-city'))
let location_= e.target.getAttribute('data-city')
let xx=`https://api.openweathermap.org/data/2.5/weather?q=${location_},India&APPID=e688ea5e8e4036017b419d8826e392df`

let x=await fetch(xx)
const movies = await x.json();

console.log(movies.main.temp);



















instance[ e.target.getAttribute('data-d')]['temp']=movies.main.temp
console.log(instance[ e.target.getAttribute('data-d')]['city'])
console.log(instance)
setRend(!rend);
    }
  return (
    <div className='slider-container' data-ss={rend}>


    {instance.map((item)=>(
    
    <div className='card-glassmorph' >
  <div className='card-inner-1'>
<div className='city-min-max'>
<img src={ shift} data-d={item.index}  data-city={item.city} onClick={refresh}  />
<div className='city'> <img src={cold}  />  {item.city} </div>
<div className='min-max'>

<img src={up}/> {item.mintemp}<img src={down}/>{item.maxTemp}

</div>





</div>
<div className='current-temp'>

<div id='temp-container'> 

{item.temp}
</div>


</div>










  </div>
  <div className='card-inner-2'>

<div className='info-container'>
<div className='icon-container'>
<img src={humidity} />

</div>
<div className='nums'>
{item.humidity}</div>
</div>

<div className='info-container'>

<div className='icon-container'>
<img src={pressure} />

</div>

<div className='nums'>
{item.pressure}</div>
</div>

<div className='info-container'>

<div className='icon-container'>
<img src={speed} style={{width:'80%'}} />

</div>


<div className='nums'>
{item.windSpeed}</div>
</div>










  </div>
    
    </div>
    
    
    ))}
    
    
    </div>
  )
}
