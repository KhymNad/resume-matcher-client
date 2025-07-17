import React from 'react';
import styles from './Navbar.module.css';

export default function Navbar() {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <svg className={styles.icon} xmlns="http://www.w3.org/2000/svg" fill="#2563eb" viewBox="0 0 24 24" width="32" height="32">
                <path d="M3 3v18h18V3H3zm16 16H5V5h14v14z" />
                <path fill="#2563eb" d="M7 7h10v2H7zm0 4h10v2H7z" />
                </svg>
                <div className={styles.titleGroup}>
                <h1 className={styles.title}>Resume Matcher</h1>
                <p className={styles.subtitle}>Find your perfect job match</p>
                </div>
            </div>
            <button className={styles.accountBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="#374151" viewBox="0 0 24 24" width="18" height="18" style={{ marginRight: '6px' }}>
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zM12 13.2c-3.3 0-9.6 1.65-9.6 4.8v1.2h19.2v-1.2c0-3.15-6.3-4.8-9.6-4.8z" />
                </svg>
                Account
            </button>
        </header>
    );
}
