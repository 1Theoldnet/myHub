import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineUserAdd } from "react-icons/ai"
import './Login.scss'
import { useState } from 'react'
import { SearchBar } from './SearchBar/SearchBar'
import { FaUsers } from "react-icons/fa6"

export const Login = ({ users, setUsers }) => {
    const [openSearch, setOpenSearch] = useState(false)

    return (
        <>
            <SearchBar openSearch={openSearch} />
            <div className="users-block" onClick={() => setOpenSearch(!openSearch)}><FaUsers /></div>
            <div className="login-block">
                <div className="login">
                    <h3>Создайте аккаунт <AiOutlineUserAdd /></h3>
                    <Input placeholder='Cсылка на аватарку' />
                    <Input placeholder='Имя' />
                    <Input placeholder='Почта' />
                    <Input placeholder='Пароль' />
                    <Button onClick={() => setOpenSearch(!openSearch)}><div style={{ marginRight: 5 }}><IoIosAdd /></div>Создать</Button>
                </div>
            </div>
        </>
    )
}