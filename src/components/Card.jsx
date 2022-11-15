import React from 'react'

const Card = ({data}) => {
    if(JSON.stringify(data) !== '{}'){
      return (
        <div className='d-flex justify-content-center gap-2 align-items-center flex-column'>
          
            <h2>{data.name}, {data.sys.country}</h2>
            <h1>
             <img src={`http://openweathermap.org//img/w/${data.weather[0].icon}.png`} /> {data.main.temp} °C
            </h1>
    
            <p className="text-lg fw-bold">
                {data.weather[0].main}
            </p>
            <p>
            Humidity: {data.main.humidity}%
            </p>
            <p>
            Visibility:
                {parseInt(data.visibility) / 1000}km
            </p>
        </div>
      )
    }
    else{
      return (
        <h2>Loading...</h2>
      )
    }
}

export default Card