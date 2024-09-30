import { LeftBar } from '../LeftBar/LeftBar'
import { Routes, Route } from 'react-router-dom'
import './Main.scss'

export const Main = () => {
    return (
        <main className='main'>
            <div>
                <LeftBar />
            </div>
            <div>
                <Routes>
                    <Route path='/' element={''} />
                </Routes>
            </div>
        </main>
    )
}