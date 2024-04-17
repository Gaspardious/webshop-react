
import Header from "../../components/Header/header"
import Footer from "../../components/Footer/footer"
import Card from "../../components/card"
import data from "../../../src/data"


export default function Products () {
            const cards = data.map(item => {
                return (
                    <Card 
                        img={item.img}
                        name={item.name}
                        price={item.price}
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

