import { useState } from 'react'
import { Header } from './components/Header/Header'
import { Main } from './components/Main/Main'
import { Login } from './pages/Login/Login'
import { BootLoader } from './components/BootLoader/BootLoader'
import { LeftBar } from './components/LeftBar/LeftBar'
import { CreateBar } from './components/CreateBar/CreateBar'

export const App = () => {
  const [loader, setLoader] = useState(true)
  const [login, setLogin] = useState(false)
  const [users, setUsers] = useState([])
  const [user, setUser] = useState(null)
  const [openMenu, setOpenMenu] = useState(false)
  const [openMenuCreate, setOpenMenuCreate] = useState(false)
  const [x, setX] = useState(null)

  if(loader) return <BootLoader setLoader={setLoader} />

  if(!login) return <Login users={users} setUsers={setUsers} setUser={setUser} setLogin={setLogin} />

  return (
    <>
      <Header setX={setX} users={users} user={user} openMenuCreate={openMenuCreate} setOpenMenuCreate={setOpenMenuCreate} openMenu={openMenu} setOpenMenu={setOpenMenu} />
      {openMenu && <LeftBar setOpenMenu={setOpenMenu} />}
      {openMenuCreate && <CreateBar x={x} setOpenMenuCreate={setOpenMenuCreate} />}
      <Main />
    </>
  )
}