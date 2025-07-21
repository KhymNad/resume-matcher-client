import React from "react";
import JobResultCard from "../JobResultCard/JobResultCard";
import { motion as Motion } from 'framer-motion';
import styles from "./JobResultSection.module.css";

export default function JobResultSection({ jobs = [] }) {
    const hasJobs = jobs.length > 0;

    return (
        <Motion.div
            className={styles.jobResultsSection}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {hasJobs ? (
                jobs.map((job, index) => (
                    <JobResultCard key={index} job={job} />
                ))
            ) : (
                <div className={styles.noJobsFound}>
                    <h4>No Jobs Found</h4>
                    <p>Please ensure:</p>
                    <ul>
                        <li>Your region is selected correctly</li>
                        <li>You uploaded a proper resume file</li>
                    </ul>
                </div>
            )}
        </Motion.div>
    );
}
