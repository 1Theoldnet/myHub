import { Button } from '../ui/Button/Button'
import './Header.scss'
import { Link } from 'react-router-dom'
import { RiMenu5Line } from "react-icons/ri"

export const Header = ({ openMenu, setOpenMenu }) => {
    return (
        <header>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <div onClick={() => setOpenMenu(!openMenu)} style={{ marginRight: 5, marginLeft: 2 }}><Button width={30} height={30}><RiMenu5Line /></Button></div>
                <Link to="/">
                    <img src="/logo.png" width={50} />
                </Link>
            </div>

            <div className="search-div">
                
            </div>

            <div>

            </div>
        </header>
    )
}