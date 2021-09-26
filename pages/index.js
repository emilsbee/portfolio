// External imports
import Head from 'next/head'

// Internal imports
import styles from '../styles/Home.module.css'
import AboutMe from "../components/AboutMe";
import ProjectSection from "../components/ProjectSection"

export default function Home() {
    return (
        <div className={styles.homeContainer}>
            <Head>
                <title>Emils Bernhards</title>
                <meta name="description" content="Emils' portfolio"/>
                <link rel="icon" href="/favicon.ico"/>
                <link
                    href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
                    rel="stylesheet"
                />
            </Head>

            <div className={styles.homeInnerContainer}>
                <AboutMe/>
                <ProjectSection/>
            </div>

        </div>
    )
}
