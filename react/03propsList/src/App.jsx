import { useState } from 'react'

import './App.css'

function App() {
  const Cities = ["Mumbai", "Delhi", "Chennai" , "Bengaluru" , "Kolkata"]
  const totalCities = Cities.map((city,index) =><h3 key = {index}>  {city} {index}  </h3>)

  return (
    <div className='Main'>
      <h2>Cities Name</h2>
      <h3>{totalCities}</h3>

    </div>
      
   
  )
}

export default App
