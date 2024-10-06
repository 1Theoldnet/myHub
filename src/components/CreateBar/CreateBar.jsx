import './CreateBar.scss'
import { Link } from 'react-router-dom'

export const CreateBar = ({ setOpenMenuCreate, x }) => {
    return (
        <div className="create-bar" style={{ left: x }}>
            <Link to='/create-arctive'><button>Создать статью</button></Link>
            <Link to='/create-toy'><button>Создать игрушку</button></Link>
        </div>
    )
}