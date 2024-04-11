
export default function Card() {

    return (
        <div className="card">
            <img src="./src/sweaters/rosa-fram.jpeg" alt="pink sweater" className="sweaters" />
            <div className="product__info">
                <h1 className="product__name">Mr.Pink</h1>
                <h2 className="product__price">249 SEK</h2>
                    <div className="product__size">
                        <p><small>SIZE</small></p>
                        <p><strong>L</strong></p>
                    </div>
                    
            </div>
            <button className="product__button">BUY</button>
        </div>
    );
}