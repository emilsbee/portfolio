// External imports
import React from 'react';
import Image from 'next/image'

// Internal imports
import styles from "../../styles/AboutMe.module.css"
import SelfImage from "../../public/emils.webp"
import Button from "../Button"

const AboutMe = () => {
    return (
        <div>
            <div className={styles.aboutMeContainer}>
                <div className={styles.selfImageContainer}>
                    <Image
                        className={styles.selfImage}
                        src={SelfImage}
                        alt="Image of Emils"
                        placeholder={"blur"}
                        objectFit="cover"
                    />
                </div>

                <div className={styles.aboutMeDescription}>
                    <div className={styles.aboutMeDescriptionTitle}>
                        {"Hey, I'm Emīls Bernhards!"}
                    </div>
                    <div className={styles.aboutMeDescriptionDetails}>
                        {"I currently study Business Information Technology at University of Twente. I'm interested in all things software, but mostly work with web related technologies."}
                    </div>
                </div>

            </div>

            <div className={styles.linksContainer}>
                <div style={{marginTop: 10}}>
                    {"Want to get in touch? Here's a few ways"}
                </div>
                <div className={styles.linksContainerLinks}>
                    <a
                        href="https://www.linkedin.com/in/em%C4%ABls-bernhards-15a47614a/?originalSubdomain=nl"
                        target="_blank"
                        className={styles.linksContainerLink}
                        rel="noreferrer noopener"
                    >
                        <Button text="LinkedIn" backgroundColor="rgb(40, 102, 188)" onClick={() => null}
                                styles={{marginLeft: 0}}/>
                    </a>

                    <div className={styles.linksContainerLink}>
                        <Button
                            styles={{marginLeft: 0}}
                            text="Email"
                            backgroundColor="rgb(139, 136, 130)"
                            onClick={() => window.open('mailto:bernhards@emils.xyz?subject=Subject&body=Body')}
                        />
                    </div>

                    <a
                        href="https://www.github.com/emilsbee"
                        target="_blank"
                        className={styles.linksContainerLink}
                        rel="noreferrer noopener"
                    >
                        <Button text="Github" backgroundColor="rgb(31, 29, 26)" onClick={() => null}
                                styles={{marginLeft: 0}}/>
                    </a>

                    <a
                        className={styles.linksContainerLink}
                        href={"/Résumé.pdf"}
                        download
                    >
                        <Button
                            text={"Résumé"}
                            backgroundColor="rgb(31, 29, 26)"
                            styles={{marginLeft: 0}}
                        />
                    </a>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;