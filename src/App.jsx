import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Login } from './pages/Login/Login'
import { BootLoader } from './components/BootLoader/BootLoader'

export const App = () => {
  const [loader, setLoader] = useState(true)
  const [login, setLogin] = useState(localStorage.getItem('login') === null ? false : localStorage.getItem('login'))
  const [users, setUsers] = useState([])

  if(loader) return <BootLoader setLoader={setLoader} />

  if(!login) return <Login user={users} setUser={setUsers} />

  return (
    <>
      <div>
        <Header />
      </div>
      <Main />
    </>
  )
}