
import './header.css'
import Title from '../Title/title'
import { Link } from 'react-router-dom'

export default function Header (){
return (
    <>
    <header>
    <img src="/src/Images/logo.jpg" alt="" className='logo' />
    <Title />
        <nav>
            <ul>
                <li><Link to="/">HOME</Link></li>
                <li><Link to="/products">PRODUCTS</Link></li>
                <li><Link to="/about">ABOUT</Link></li>
            </ul>
        </nav>
    </header>
</>
)}