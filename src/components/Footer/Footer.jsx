import React from "react";
import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footerSection}>
            <div className={styles.container}>
                <div className={styles.about}>
                    <h3>Resume Matcher</h3>
                    <p>Find your perfect job match with AI-powered resume analysis</p>
                </div>

                <div className={styles.linksContainer}>
                    <div className={styles.product}>
                        <h3>Product</h3>
                        <ul>
                            <li>How it Works</li>
                            <li>Features</li>
                        </ul>
                    </div>

                    <div className={styles.contact}>
                        <h3>Contact</h3>
                        <ul>
                            <li>Email: khymnad@gmail.com</li>
                            <li>
                                <div className={styles.iconRow}>
                                {/* LinkedIn Icon */}
                                <a
                                    href="https://www.linkedin.com/in/khym-nad-76b262235/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.iconLink}
                                    aria-label="LinkedIn"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className={styles.icon}
                                    >
                                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
                                    </svg>
                                </a>

                                {/* GitHub Icon */}
                                <a
                                    href="https://github.com/KhymNad"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={styles.iconLink}
                                    aria-label="GitHub"
                                >
                                    <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 448 512"
                                    className={styles.icon}
                                    >
                                    <path d="M448 96c0-35.3-28.7-64-64-64H64C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96zM265.8 407.7c0-1.8 0-6 .1-11.6c.1-11.4 .1-28.8 .1-43.7c0-15.6-5.2-25.5-11.3-30.7c37-4.1 76-9.2 76-73.1c0-18.2-6.5-27.3-17.1-39c1.7-4.3 7.4-22-1.7-45c-13.9-4.3-45.7 17.9-45.7 17.9c-13.2-3.7-27.5-5.6-41.6-5.6s-28.4 1.9-41.6 5.6c0 0-31.8-22.2-45.7-17.9c-9.1 22.9-3.5 40.6-1.7 45c-10.6 11.7-15.6 20.8-15.6 39c0 63.6 37.3 69 74.3 73.1c-4.8 4.3-9.1 11.7-10.6 22.3c-9.5 4.3-33.8 11.7-48.3-13.9c-9.1-15.8-25.5-17.1-25.5-17.1c-16.2-.2-1.1 10.2-1.1 10.2c10.8 5 18.4 24.2 18.4 24.2c9.7 29.7 56.1 19.7 56.1 19.7c0 9 .1 21.7 .1 30.6c0 4.8 .1 8.6 .1 10c0 4.3-3 9.5-11.5 8C106 393.6 59.8 330.8 59.8 257.4c0-91.8 70.2-161.5 162-161.5s166.2 69.7 166.2 161.5c.1 73.4-44.7 136.3-110.7 158.3c-8.4 1.5-11.5-3.7-11.5-8z" />
                                    </svg>
                                </a>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className={styles.bottomBar}>
                <p>© {new Date().getFullYear()} ResumeMatcher. All rights reserved.</p>
            </div>
        </footer>
    );
}
