import './App.css'
import { useState } from 'react'
import RotasPublicas from './routes/RotasPublicas';
import RotasPrivadas from './routes/RotasPrivadas';

function App() {

  const[isLogged, setIsLogged] = useState(false);

  function autorizarLogin() {
    setIsLogged(true)
  }

  function autorizarLogout() {
    setIsLogged(false)
  }
  
  if(isLogged) {
    return <RotasPrivadas autorizarLogout={autorizarLogout} />
  }

  return <RotasPublicas autorizarLogin={autorizarLogin} />

}

export default App
