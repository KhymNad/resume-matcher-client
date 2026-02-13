import React, { useState } from "react";
import JobResultCard from "../JobResultCard/JobResultCard";
import { motion as Motion } from 'framer-motion';
import styles from "./JobResultSection.module.css";

const JOBS_PER_PAGE = 6;

export default function JobResultSection({ jobs = [] }) {
    const [currentPage, setCurrentPage] = useState(1);
    const hasJobs = jobs.length > 0;
    const totalPages = Math.ceil(jobs.length / JOBS_PER_PAGE);
    const startIndex = (currentPage - 1) * JOBS_PER_PAGE;
    const paginatedJobs = jobs.slice(startIndex, startIndex + JOBS_PER_PAGE);

    return (
        <Motion.div
            className={styles.jobResultsSection}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            {hasJobs ? (
                <>
                    <div className={styles.jobsList}>
                        {paginatedJobs.map((job, index) => (
                            <JobResultCard key={startIndex + index} job={job} />
                        ))}
                    </div>

                    {totalPages > 1 && (
                        <div className={styles.pagination}>
                            <button
                                className={styles.pageBtn}
                                onClick={() => setCurrentPage(p => p - 1)}
                                disabled={currentPage === 1}
                            >
                                Prev
                            </button>

                            {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                                <button
                                    key={page}
                                    className={`${styles.pageBtn} ${page === currentPage ? styles.pageBtnActive : ''}`}
                                    onClick={() => setCurrentPage(page)}
                                >
                                    {page}
                                </button>
                            ))}

                            <button
                                className={styles.pageBtn}
                                onClick={() => setCurrentPage(p => p + 1)}
                                disabled={currentPage === totalPages}
                            >
                                Next
                            </button>
                        </div>
                    )}
                </>
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
