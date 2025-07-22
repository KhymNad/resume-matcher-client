import React from "react";
import styles from "./JobResultCard.module.css";

export default function JobResultCard({ job }) {
    const truncate = (text, maxLength = 160) =>
        text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return (
        <div className={styles.jobCard}>
            <div className={styles.header}>
                <h3 className={styles.jobTitle}>{job.title}</h3>
                <span className={styles.jobCompany}>{job.company.display_name}</span>
            </div>

            <p className={styles.jobLocation}>
            <span className={styles.locationWrapper}>
                <svg
                className={styles.locationIcon}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                >
                <path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z" />
                </svg>
                {job.location.display_name}
            </span>
            </p>

            <p className={styles.jobDescription}>{truncate(job.description)}</p>

            <div className={styles.cardFooter}>
                <a
                    href={job.redirect_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={styles.jobLink}
                >
                    View Job
                    <span className={styles.arrowIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                        <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"/>
                    </svg>
                    </span>
                </a>
            </div>
        </div>
    );
}
