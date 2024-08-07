import styles from './contact.module.css'


export default function Contact () {
    return (
    <>
    
        <div className={styles.contact}>
        <h1 className={styles.contact__title}>CONTACT</h1>
            <section className={styles.contact__section}>
        
        <form>
            <div className={styles.contact__form}>
                <label htmlFor="name">Name</label> 
                <input type="text" name="name" id="name" placeholder="John Doe" required/>
            </div>
            <div className={styles.contact__form}>
                <label htmlFor="email">Email</label> 
                <input type="email" name="email" id="email" placeholder="email" required/>
            </div>
            <div className={styles.contact__form}>
                <label htmlFor="message">Message</label> 
                <textarea className={styles.contact__textarea} name="message" id="message" cols="30" rows="10" placeholder="Message" required></textarea>
            </div>
            <button className={styles.contact__btn}>SEND</button>
        </form>


            </section>
        </div>
    </>
    )
    }