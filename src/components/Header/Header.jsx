import { Button } from '../ui/Button/Button'
import './Header.scss'
import { Link } from 'react-router-dom'

export const Header = () => {
    return (
        <header>
            <Link to="/">
                <img src="/logo.png" width={50} />
            </Link>

            <div className="search-div">
                div
            </div>

            <Button onClick={() => alert()}>Создать аккаунт</Button>
        </header>
    )
}