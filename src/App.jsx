
import { useRef, useState } from 'react'
import './App.css'

import useFetch from './hooks/useFetch'
import getRandomLocation from './utils/getRandomLocation'
import MainContent from './components/MainContent'



function App() {

 

  const [ residentsRandom, setResidentRandom ] = useState(getRandomLocation())
 
  const url = `https://rickandmortyapi.com/api/location/${residentsRandom}`
  const [location, hasError] = useFetch(url)
  console.log(location)

  const inputLocation = useRef()

  const handleSubmit = e => {
    e.preventDefault()
    setResidentRandom(inputLocation.current.value)
  }

  

  return (
    <div className='app'>
     <img className='app__title' src='/backgrounds/background.jpg' alt='imagen' />

      <form className='app__form' onSubmit={handleSubmit}>
        <input className='app__input' ref={inputLocation} type='text'/>
        <button className='app__btn'>search</button>
      </form>

      {
        hasError
        ? <h2 className='app__error'>location not found</h2>
        :<MainContent location={location} />
      }
     
     

    </div>
  )
}

export default App
