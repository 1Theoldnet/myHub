import { Button } from '../../components/ui/Button/Button'
import { Input } from '../../components/ui/Input/Input'
import { IoIosAdd } from 'react-icons/io'
import { AiOutlineUserAdd } from "react-icons/ai"
import './Login.scss'
import { IoIosClose } from "react-icons/io"
import { useState } from 'react'
import { SearchBar } from './SearchBar/SearchBar'
import { FaUsers } from "react-icons/fa6"

export const Login = ({ users, setUsers, setLogin, setUser }) => {
    const [openSearch, setOpenSearch] = useState(false)
    const [objInps, setObjInps] = useState({ avatar: '', name: '', email: '', password: '' })

    return (
        <>
            {openSearch && <SearchBar users={users} setUsers={setUsers} setLogin={setLogin} setUser={setUser} />}
            <div className="users-block" onClick={() => setOpenSearch(!openSearch)}>{openSearch ? <IoIosClose /> : <FaUsers />}</div>
            <div className="login-block" onClick={() => setOpenSearch(false)}>
                <div className="login">
                    <h3>Создайте аккаунт <AiOutlineUserAdd /></h3>
                    <Input placeholder='Cсылка на аватарку' value={objInps.avatar} onChange={e => setObjInps({ ...objInps, avatar: e.target.value })} />
                    <Input placeholder='Имя' value={objInps.name} onChange={e => setObjInps({ ...objInps, name: e.target.value })} />
                    <Input placeholder='Почта' value={objInps.email} onChange={e => setObjInps({ ...objInps, email: e.target.value })} />
                    <Input placeholder='Пароль' value={objInps.password} onChange={e => setObjInps({ ...objInps, password: e.target.value })} />
                    <Button onClick={() => {
                        setUsers([{ id: users.length + 1, avatar: objInps.avatar, name: objInps.name, email: objInps.email, password: objInps.password }, ...users ])
                        setObjInps({ avatar: '', name: '', email: '', password: '' })
                    }}><div style={{ marginRight: 5 }}><IoIosAdd /></div>Создать</Button>
                </div>
            </div>
        </>
    )
}