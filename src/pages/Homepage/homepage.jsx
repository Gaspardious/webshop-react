import './homepage.css'



export default function Homepage () {
    return (
    <>
        <div className='hero'>
            <img src="/Images/rosa-fram.jpeg" alt="" className="hero__img" />
            <div className='hero__desc'>
                <h1>SEE ALL PRODUCTS!</h1>
                <h3>MADE IN SWEDEN!</h3>
                <a href="../Products/" className='hero__btn'>GO TO PRODUCTS</a>
            </div>
        </div>
    </>
    )
    }