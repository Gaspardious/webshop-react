import styles from './about.module.scss'

export default function About () {
return (
    <>
        <div className={styles.about}>
        <h1 className={styles.about__title}>ABOUT</h1>
            <section className={styles.about__section}>
                <p className={styles.about__desc}> Founded in 2018 by Dejan Gaspar.
                </p>   
                <p className={styles.about__desc}> Dejan started this brand to create a clothing line that he would wear himself. He drew inspiration from the 90s and 00s skateboarding and streetwear culture and combined it with his own personal style, creating a brand that is both nostalgic and modern.
                </p>   
                <p className={styles.about__desc}> Sticky Sweater is based in the Sweden.
                </p>   
                <p className={styles.about__desc}> Peace!
                </p>   
                <img src="/Images/dejan.png"  alt="Picture of Dejan, the founder" className={styles.about_img} />
            </section>
        </div>
    </>
)
}