import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [websitedata,setwebsitedata] = useState([])
  useEffect(()=>{
    axios.get('/api/Website')
    .then((response)=>{
      setwebsitedata(response.data)
    })
    .catch((error)=>{
      console.log(error)
    })

  })
  return (
    <>
      <h1>Vimal joshi</h1>
      <p>My Website Data length : {websitedata.length}</p>
      {
        websitedata.map((websitedata)=>(
          <div key={websitedata.id}>
            <h1>{websitedata.Name}</h1>
            <img src={websitedata.img} alt="" srcset="" />
          </div>
        ))
      }
    </>
  )
}

export default App
