
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Card from "../../components/card"
import data from "../../../src/data"


export default function Products () {
            const cards = data.map(item => {
                return (
                    <Card 
                    /* item={item} går även att ta bort "...item" nedan och erätta med item={item}. Då måste .item läggas till i card efter alla props. */
                    {...item} /* detta skapar en array/object utan att skriva ut allt = https://www.w3schools.com/react/react_es6_spread.asp */
                    />
                )
            })        
            
            return (
                <>
                    <Header />
                    <div className="cards-list">
                        {cards}
                    </div>
                    <Footer />
                </>
            )
        }

