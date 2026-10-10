import './App.css'
import { useContext, useState } from 'react'
import RotasPublicas from './routes/RotasPublicas';
import RotasPrivadas from './routes/RotasPrivadas';
import { AuthContext } from './contexts/AuthContext';

function App() {

  const { isLogged } = useContext(AuthContext)
  
  if(isLogged) {
    return <RotasPrivadas />
  }

  return <RotasPublicas />

}

export default App
