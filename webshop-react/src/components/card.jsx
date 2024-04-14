
export default function Card() {

    return (
        <div className="card">
            <div className="product__section">
                <img src="./src/sweaters/rosa-fram.jpeg" alt="pink sweater" className="sweaters" />
                <div className="product__size">
                                <p><strong>SIZE</strong></p>
                                <p><small>M / L / XL</small></p>
                </div>
            </div>

            <h1 className="product__company">STICKY SWEATER</h1>
                <div className="product__info">
                    <h1 className="product__name">GLENN</h1>
                    <h2 className="product__price">249 SEK</h2>      
                </div>
            <button className="product__button">BUY</button>
        </div>
    );
}