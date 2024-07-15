import styles from './contact.module.css'


export default function Contact () {
    return (
    <>
    
        <div className={styles.contact}>
        <h1 className={styles.contact__title}>CONTACT</h1>
            <section className={styles.contact__section}>
                    <p className={styles.contact__desc}>Mail: dejan.gaspar88@gmail.com</p>
                    <p className={styles.contact__desc}>Phone: 123-456-78</p>
            </section>
        </div>
    </>
    )
    }