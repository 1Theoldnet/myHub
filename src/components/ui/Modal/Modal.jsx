import { IoClose } from 'react-icons/io5'
import './Modal.scss'

export const Modal = ({ children, width, title, icon, height, x, y }) => {


    return (
        <div className="modal" style={{ width: width, height: height, zIndex: 2, transform: `translateX(${x}px) translateY(${y}px)` }}>
            <div className="modar-header">
                <div className="modal-icon"><img src={icon} /></div>
                <div className="modal-title">{title}</div>
                <button className="modal-close-button"><IoClose /></button>
            </div>
            <div className="modal-main">{children}</div>
        </div>
    )
}