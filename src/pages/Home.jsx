import React from 'react';
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
import toast, { Toaster } from 'react-hot-toast';
import { useHomeContext } from '../context/HomeContext';

export default function Home() {
    const {
        region, setRegion,
        resumeFile, setResumeFile,
        setParsedResume,
        jobResults, setJobResults,
        activeSidebar, setActiveSidebar,
        loading, setLoading,
        error, setError
    } = useHomeContext();

    console.log('Context state:', {
        resumeFile,
        jobResults,
        region,
        activeSidebar,
        loading,
        error,
    });

    const handleFindMatches = async (file = resumeFile) => {
        if (!file || !region) {
            toast.error('Please upload a resume and select your region.');
            return;
        }

        const formData = new FormData();
        formData.append('file', resumeFile);

        setLoading(true);
        setError(null);
        setParsedResume(null);
        setJobResults([]);
        setActiveSidebar('jobs');

        try {
            const res = await uploadResumeWithJobs(formData, region);
            console.log('API Response:', res);
            setParsedResume(res.parsedResume);
            setJobResults(res.jobResults || []);
        } catch (err) {
            setError('Failed to upload resume or fetch jobs.');
            console.error(err);
        } finally {
            setLoading(false);
        }

        console.log('resumeFile after API call:', resumeFile);
    };

    return (
        <div className={styles.page}>
            <Navbar />
            <Toaster position="top-center" reverseOrder={false} />
            <div className={styles.contentLayout}>
                <main className={`${styles.main} ${activeSidebar ? styles.shiftLeft : ''}`}>
                    <h2 className={styles.mainTitle}>Upload Your Resume</h2>
                    <p className={styles.description}>
                        Upload your resume and we'll find the best job matches for you based on your <br />
                        <strong>skills and experience.</strong>
                    </p>

                    <ResumeUpload file={resumeFile} setFile={setResumeFile} />

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
                            disabled={!resumeFile}
                            className={`${styles.toggleBtn} ${activeSidebar === 'resume' ? styles.activeBtn : ''}`}
                        >
                            Resume Preview
                        </button>
                        <button
                            onClick={() => setActiveSidebar('jobs')}
                            disabled={!jobResults?.length}
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
                                jobs={jobResults}
                                onClose={() => setActiveSidebar(null)}
                            />
                        )
                    )}

                    {activeSidebar === 'resume' && (
                        <ResumePreview
                            key="resumeSidebar"
                            file={resumeFile}
                            onClose={() => setActiveSidebar(null)}
                        />
                    )}
                </AnimatePresence>
            </div>

            <Footer />
        </div>
    );
}
