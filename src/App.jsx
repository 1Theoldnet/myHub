import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Login } from './pages/Login/Login'
import { BootLoader } from './components/BootLoader/BootLoader'
import { LeftBar } from './components/LeftBar/LeftBar'

export const App = () => {
  const [loader, setLoader] = useState(true)
  const [login, setLogin] = useState(true)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)

  if(loader) return <BootLoader setLoader={setLoader} />

  if(!login) return <Login users={users} setUsers={setUsers} setUser={setUser} setLogin={setLogin} />

  return (
    <>
      <Header openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <LeftBar setOpenMenu={setOpenMenu} />}
      <Main />
    </>
  )
}