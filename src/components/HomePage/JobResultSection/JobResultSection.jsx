import React from "react";
import JobResultCard from "../JobResultCard/JobResultCard";
import { motion as Motion } from 'framer-motion';
import styles from "./JobResultSection.module.css";

export default function JobResultSection({ jobs }) {
    return (
        <Motion.div
            className={styles.jobResultsSection}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {jobs.map((job, index) => (
                <JobResultCard key={index} job={job} />
            ))}
        </Motion.div>
    );
}
