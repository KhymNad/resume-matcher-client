import React, { useState } from 'react';
import {
    Navbar,
    RegionSelect,
    ResumeUpload,
    Footer,
    JobResultSection,
    JobResultSkeleton,
    ResumePreview
} from '../components';
import { uploadResumeWithJobs } from '../services/resume-matcher-api';
import styles from './Home.module.css';
import { AnimatePresence } from 'framer-motion';

export default function Home() {
    const [region, setRegion] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);
    const [activeSidebar, setActiveSidebar] = useState(null); // 'jobs' | 'resume' | null

    const handleFindMatches = async () => {
        if (!file || !region) {
            alert('Please select your region and upload a resume.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        setLoading(true);
        setError(null);
        setResult(null);
        setActiveSidebar('jobs');

        try {
            const res = await uploadResumeWithJobs(formData, region);
            console.log('API Response:', res);
            setResult(res);
        } catch (err) {
            setError('Failed to upload resume or fetch jobs.');
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className={styles.page}>
            <Navbar />

            <div className={styles.contentLayout}>
                <main className={`${styles.main} ${activeSidebar ? styles.shiftLeft : ''}`}>
                    <h2 className={styles.mainTitle}>Upload Your Resume</h2>
                    <p className={styles.description}>
                        Upload your resume and we'll find the best job matches for you based on your <br />
                        <strong>skills and experience.</strong>
                    </p>

                    <ResumeUpload file={file} setFile={setFile} />

                    <div className={styles.regionSelectAndUpload}>
                        <RegionSelect region={region} setRegion={setRegion} />
                        <button
                            className={styles.findJobsBtn}
                            onClick={handleFindMatches}
                            disabled={loading}
                        >
                            {loading ? 'Searching...' : 'Find Job Matches'}
                        </button>
                    </div>

                    {error && <p className={styles.error}>{error}</p>}

                    {/* Sidebar toggle buttons */}
                    <div className={styles.sidebarToggleBtns}>
                        <button
                            onClick={() => setActiveSidebar('resume')}
                            disabled={!file}
                            className={`${styles.toggleBtn} ${activeSidebar === 'resume' ? styles.activeBtn : ''}`}
                        >
                            Resume Preview
                        </button>
                        <button
                            onClick={() => setActiveSidebar('jobs')}
                            disabled={!result?.jobResults?.length}
                            className={`${styles.toggleBtn} ${activeSidebar === 'jobs' ? styles.activeBtn : ''}`}
                        >
                            Job Results
                        </button>
                        <button
                            onClick={() => setActiveSidebar(null)}
                            className={styles.toggleBtn}
                        >
                            Hide Sidebar
                        </button>
                    </div>
                </main>

                <AnimatePresence mode="wait">
                    {activeSidebar === 'jobs' && (
                        loading ? (
                            <JobResultSkeleton key="skeleton" />
                        ) : (
                            <JobResultSection
                                key="results"
                                jobs={result?.jobResults || []}
                                onClose={() => setActiveSidebar(null)}
                            />
                        )
                    )}

                    {activeSidebar === 'resume' && (
                        <ResumePreview
                            key="resumeSidebar"
                            file={file}
                            onClose={() => setActiveSidebar(null)}
                        />
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
}
