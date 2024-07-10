import Card from "../../components/Card/card"
import data from "../../data"
import './products.css'


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
                <h2 className="cards_title">PRODUCTS</h2>
                    <div className="main">
                        <div className="cards-list">
                            {cards}
                        </div>
                    </div>
                </>
            )
        }


        <section className={styles.book_section}>
          {data.map((item) => (
            <Bookcovers key={book.id} book={book} />
          ))}
        </section>
