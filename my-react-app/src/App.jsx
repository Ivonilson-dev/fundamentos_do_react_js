import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let pessoa = {nome: 'IVO', idade: 45, sexo: 'M'}
  let {nome, idade} = pessoa

  return (
    <>
    <div>
        <span>Olá {nome}</span>
        <br/>
        <span>Sua idade é {idade}</span>
    </div> 
    </>
  )
}

export default App
