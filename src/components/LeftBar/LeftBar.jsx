import './LeftBar.scss'
import { Link } from 'react-router-dom'

export const LeftBar = () => {
    const navigations = [
        {
            text: 'Главная',
            path: '/'
        },
        {
            text: 'Игрушки',
            path: '/toys'
        },
        {
            text: 'Статьи',
            path: '/posts'
        },
        {
            text: 'Друзья',
            path: '/frends'
        },
        {
            text: 'Code',
            path: '/code'
        },
        {
            text: 'Мой профиль',
            path: '/profile'
        },
        {
            text: 'Выйти',
            path: '/exit'
        }
    ]

    return (
        <div className="left-bar">
            {navigations.map(navigation => <Link to={navigation.path}><button>{navigation.text}</button></Link>)}
        </div>
    )
}