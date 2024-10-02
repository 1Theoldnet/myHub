import './LeftBar.scss'
import { Link } from 'react-router-dom'
import { navigations } from './navigations'
import { IoIosClose } from "react-icons/io"

export const LeftBar = ({ setOpenMenu }) => {
    return (
        <>
            <div className="left-bar">
                <div className="close-div" onClick={() => setOpenMenu(false)}><IoIosClose /></div>
                <div className="navigations">
                    {navigations.map(navigation => <Link to={navigation.path}><button className='navigation'>{navigation.text}</button></Link>)}
                </div>
            </div>
            <div onClick={() => setOpenMenu(false)} className="black-div"></div>
        </>
    )
}