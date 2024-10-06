import { Button } from '../ui/Button/Button'
import './Header.scss'
import { Link } from 'react-router-dom'
import { RiMenu5Line } from "react-icons/ri"

export const Header = ({ users, user, openMenu, setOpenMenu, openMenuCreate, setOpenMenuCreate, setX }) => {
    return (
        <header>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div onClick={() => { setOpenMenuCreate(false), setOpenMenu(!openMenu) }} style={{ marginRight: 5, marginLeft: 2 }}><Button width={30} height={30}><RiMenu5Line /></Button></div>
                <Link to="/">
                    <img src="/logo.png" width={50} />
                </Link>
            </div>

            <div className="create-div" onClick={e => { setX(Math.round(e.clientX - 72)), setOpenMenuCreate(!openMenuCreate) }}>
                <img src="/create.png" width={30} />
            </div>

            <Link to='my-profile'><div className='user'>
                <img src={users[user].avatar} />
                <b>{users[user].name}</b>
            </div></Link>
        </header>
    )
}