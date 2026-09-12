import './App.css'
import { useState } from 'react'
import RotasPublicas from './routes/RotasPublicas';
import RotasPrivadas from './routes/RotasPrivadas';

function App() {

  const[isLogged, setIsLogged] = useState(false);
  
  if(isLogged) {
    return <RotasPrivadas />
  }

  return <RotasPublicas />

}

export default App
