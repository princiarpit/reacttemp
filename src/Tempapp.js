import React, {useEffect, useState} from "react";

const Tempapp=()=>{
    const [city,setCity]=useState(null);
    const [search,setSearch]=useState("mumbai");

    useEffect(()=>{
       const fetchApi = async() =>{
            const url=`http://api.openweathermap.org/data/2.5/weather?q=${search}&units=metric&appid=923f47b6857e40aa8a8835e720efa46e`
            const response= await fetch(url);
            // console.log(response);
            const resjosn = await response.json();
            // console.log(resjosn);
            setCity(resjosn.main);
        };
        fetchApi();
 },[search])



    return(
        <>
        <div className="box">
        <div className="inputData">
        <input type="search"
        value={search}
        className="inputField" 
        onChange={(event) => {setSearch(event.target.value)}}
        /> </div>

          {!city ? (
            <p className="errorMsg">no data found</p>
          ) : (
              <div>
            <div className="info" >
         <h2 className="location" >
         <i className="fas fa-street-view"></i>{search}</h2>
         <h1 className="temp">
           {city.temp}°Cel 
         </h1>
         <h3 className="tempin_max">{city.temp_min}°Cel |{city.temp_max}°Cel  </h3>
         </div>
         <div className="wave-one"></div>
         <div className="wave-two"></div>
         <div className="wave-three"></div>
         </div>
          )}
            
     </div>
         </>
    );
};
export default Tempapp;