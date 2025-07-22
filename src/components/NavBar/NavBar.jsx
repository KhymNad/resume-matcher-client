import React from 'react';
import styles from './NavBar.module.css';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/resumeMatcherLogo3.png';

export default function Navbar() {
    const location = useLocation();

    const isHome = location.pathname === "/";

    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <Link to="/">
                    <img
                        className={styles.icon}
                        src={logo}
                        alt="Resume Matcher Logo"
                    />
                </Link>
                <div className={styles.titleGroup}>
                    <h1 className={styles.title}>Resume Matcher</h1>
                    <p className={styles.subtitle}>Find your perfect job match</p>
                </div>
            </div>
            <div className={styles.rightSection}>
                {!isHome && (
                    <Link to="/">
                        <button className={styles.findJobsBtn}>Find Jobs</button>
                    </Link>
                )}
            </div>
        </header>
    );
}
