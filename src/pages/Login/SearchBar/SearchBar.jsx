import './SearchBar.scss'
import { IoSearch } from "react-icons/io5"
import { IoIosClose } from "react-icons/io"
import { useState } from 'react'

export const SearchBar = ({ users, setUsers, setLogin, setUser }) => {
    const [inpSearch, setInpSearch] = useState('')

    return (
        <div className="search-bar-show">
            <div className="search-div">
                <IoSearch />
                <input placeholder='Поиск' value={inpSearch} onChange={e => setInpSearch(e.target.value)} />
                {inpSearch !== '' && <div className='close-div' onClick={() => setInpSearch('')}><IoIosClose /></div>}
            </div>

            <div className="users">
                {users.filter(user => {
                    return user.name.toLowerCase().includes(inpSearch.toLowerCase())
                }).map((user, i) => <div key={i} className='user' onClick={() => {
                    setUser(i)
                    setLogin(true)
                }}>
                    <img src={user.avatar} />
                    <b>{user.name}</b>
                </div>)}
            </div>
        </div>
    )
}
