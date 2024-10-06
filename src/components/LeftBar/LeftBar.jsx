import './LeftBar.scss'
import { Link, useLocation } from 'react-router-dom'
import { navigations } from './navigations'
import { IoIosClose, IoIosHelpCircleOutline } from "react-icons/io"
import { GrArticle } from 'react-icons/gr'
import { FaHome } from 'react-icons/fa'
import { CgProfile } from 'react-icons/cg'
import { IoExitOutline, IoSettingsOutline } from 'react-icons/io5'

export const LeftBar = ({ setOpenMenu }) => {
    const loc = useLocation()

    return (
        <>
            <div className="left-bar">
                <div className="close-div" onClick={() => setOpenMenu(false)}><IoIosClose /></div>
                <div className="navigations">
                    {navigations.map((navigation, i) => <Link key={i} to={navigation.path}><button className={navigation.path === loc.pathname ? 'navigation-active' : 'navigation'}><div className="icon">{navigation.path === '/' ? <FaHome /> : navigation.path === '/posts' ? <GrArticle /> : navigation.path === '/profile' ? <CgProfile /> : navigation.path === '/settings' ? <IoSettingsOutline /> : navigation.path === '/help' ? <IoIosHelpCircleOutline /> : navigation.path === '/exit' ? <IoExitOutline /> : ''}</div><span>{navigation.text}</span></button></Link>)}
                </div>
            </div>
            <div onClick={() => setOpenMenu(false)} className="black-div"></div>
        </>
    )
}