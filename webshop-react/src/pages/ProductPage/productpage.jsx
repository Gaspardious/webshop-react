import Product from "../../components/Product/product";
import data from "../../data"
import './productpage.css'



export default function Productpage () {
            const cards = data.map(item => {
                return (
                    <Product 
                    /* item={item} går även att ta bort "...item" nedan och erätta med item={item}. Då måste .item läggas till i card efter alla props. */
                    {...item} /* detta skapar en array/object utan att skriva ut allt = https://www.w3schools.com/react/react_es6_spread.asp */
                    />
                )
            })        
            
            return (
                <>
                    <div className="productpage__main">
                        <div className="productpage">
                            {cards}
                        </div>
                    </div>
                </>
            )
        }