import { useEffect } from 'react'
import './BootLoader.scss'

export const BootLoader = ({ setLoader }) => {
    useEffect(() => {
        setInterval(() => setLoader(false), 3000)
    }, [])

    return (
        <div className="boot-loader">
            <div className="boot">
                <img src="/logo.png" />

                <div className="load">
                    <div className="loader"></div>
                </div>
            </div>
        </div>
    )
}