import styles from './homepage.module.scss'

export const HomePage = () => {
    return(
        <div className={styles.main}>
            <p>HomePage</p>  
            <p>Navigacja</p>
            <p>Wyszukiwanie</p>
            <p>Kategorie Głowne</p>
            <p>Ogłoszenia Promowane</p>
            <p>Footer</p>
        </div>
    )
}