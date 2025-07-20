import React from "react";
import styles from "./JobResultCard.module.css";

export default function JobResultCard({ job }) {
    const truncate = (text, maxLength = 160) =>
        text.length > maxLength ? text.substring(0, maxLength) + "..." : text;

    return (
        <div className={styles.jobCard}>
            <h3 className={styles.jobTitle}>{job.title}</h3>
            <p className={styles.jobCompany}>{job.company.display_name}</p>
            <p className={styles.jobLocation}>{job.location.display_name}</p>
            <p className={styles.jobDescription}>{truncate(job.description)}</p>
            <a href={job.redirect_url} target="_blank" rel="noopener noreferrer" className={styles.jobLink}>
                View Job
            </a>
        </div>
    );
}
