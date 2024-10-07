import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound/NotFound'
import './Main.scss'
import { Modal } from '../ui/Modal/Modal'

export const Main = ({ users, user }) => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={'dddddddddddddddddddddddddddddddd'} />
                <Route path='*' element={<NotFound />} />
            </Routes>

            {users[user].modals.map((modal, i) => <Modal key={i} children={modal.children} width={modal.width} height={modal.height} title={modal.title} icon={modal.icon} />)}
        </main>
    )
}