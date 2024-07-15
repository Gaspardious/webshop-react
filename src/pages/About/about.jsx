import styles from './about.module.css'

export default function About () {
return (
    <>
        <div className={styles.about}>
        <h1 className={styles.about__title}>ABOUT</h1>
            <section className={styles.about__section}>
                <p className={styles.about__desc}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                    laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit 
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa 
                    qui officia deserunt mollit anim id est laborum.
                </p>   
            </section>
        </div>
    </>
)
}