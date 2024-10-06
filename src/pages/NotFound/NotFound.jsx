import { useLocation, Link } from 'react-router-dom'
import { Button } from '../../components/ui/Button/Button'
import './NotFound.scss'

const imagePath = 'https://img.freepik.com/premium-vector/flat-modern-character-trying-connecting-cables-web-online-page-with-404-found-error_372769-2127.jpg?size=626&ext=jpg&ga=GA1.1.442956256.1728192529&semt=ais_hybrid'

export const NotFound = () => {
    const loc = useLocation()

    return (
        <div className="not-found">
            <img src={imagePath} />
            <div className="block">
                <b>Страница не найдена на порту: {loc.pathname}</b>
                <br />
                <br />
                <Link to='/'><Button>На главную</Button></Link>
            </div>
        </div>
    )
}