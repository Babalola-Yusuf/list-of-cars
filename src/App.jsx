import { useState } from 'react'
import './App.css'

function App() {
  const [cars, setCar] = useState([])
  const [carYear, setCarYear] = useState(new Date().getFullYear());
  const [carMake, setCarMake] = useState("");
  const [carModel, setCarModel] = useState("");

  const handleAddCar=()=>{
    const newCar = {year:carYear, make:carMake, model:carModel}
    setCar(c =>[...c, newCar]);
    setCarYear(new Date().getFullYear());
    setCarMake("");
    setCarModel("");
  }

  const handleRemoveCar = (index) =>{
      setCar(c => c.filter((_, i)=> index !== i))
  }

  const handleYearChange = (event) =>{
    setCarYear(event.target.value)
  }

  const handleMakeChange = (event) =>{
    setCarMake(event.target.value)
  }

  const handleModelChange = (event) =>{
    setCarModel(event.target.value)
  }

  return (
    
      <div className=''>
        <h1>List of car objects</h1>
        <ul>
          {cars.map((car, index)=>
            <li key={index} onClick={()=>handleRemoveCar(index)}>{car.year}  {car.make} {car.model} </li>
          )}
        </ul>
       <input type="number" onChange={handleYearChange} value={carYear} className='border-2' placeholder='input year'/>
       <input type="text" onChange={handleMakeChange} value={carMake} className='border-2' placeholder='input car make'/>
       <input type="text" onChange={handleModelChange} value={carModel} className=' border-2' placeholder='input car model'/>
       <button onClick={handleAddCar} className='border-2'>Add car</button>
      </div>
  )
}

export default App
