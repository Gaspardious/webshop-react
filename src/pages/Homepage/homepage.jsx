import './homepage.css'
import { Link } from 'react-router-dom'



export default function Homepage () {
    return (
    <>
        <div className='hero'>
            <img src="/Images/rosa-fram.jpeg" alt="" className="hero__img" />
            <div className='hero__desc'>
                <h1>SEE ALL PRODUCTS!</h1>
                <h3>MADE IN SWEDEN!</h3>
                <li className='hero__btn'><Link to="/products">GO TO PRODUCTS</Link></li>
            </div>
        </div>
    </>
    )
    }