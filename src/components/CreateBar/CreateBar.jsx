import './CreateBar.scss'
import { GrArticle } from 'react-icons/gr'

export const CreateBar = ({ setOpenMenuCreate, x, modals, users, user }) => {
    return (
        <div className="create-bar" style={{ left: x }}>
            <button onClick={() => {
                setOpenMenuCreate(false)
                users[user].modals = [{ children: 'dwd', width: 300, title: 'Создать статью', icon: '/create.png', height: 300 }, ...users[user].modals]
                console.log(users[user].name, users[user].modals)
            }}><GrArticle />Создать статью</button>
            <button onClick={() => {
                setOpenMenuCreate(false)
            }}>Создать игрушку</button>
        </div>
    )
}