import { Routes, Route } from 'react-router-dom'
import { NotFound } from '../../pages/NotFound/NotFound'
import './Main.scss'

export const Main = () => {
    return (
        <main className='main'>
            <Routes>
                <Route path='/' element={'dddddddddddddddddddddddddddddddd'} />
                <Route path='*' element={<NotFound />} />
            </Routes>
        </main>
    )
}