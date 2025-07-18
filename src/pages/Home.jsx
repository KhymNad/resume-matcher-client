import React, { useState } from 'react';
import { Navbar, RegionSelect, ResumeUpload, Footer } from '../components';
import { uploadResumeWithJobs } from '../services/resume-matcher-api'; // Adjust path if needed
import styles from './Home.module.css';

export default function Home() {
    const [region, setRegion] = useState('');
    const [file, setFile] = useState(null);
    const [loading, setLoading] = useState(false);
    const [result, setResult] = useState(null);
    const [error, setError] = useState(null);

    const handleFindMatches = async () => {
        if (!file || !region) {
            alert('Please select your region and upload a resume.');
            return;
        }

        const formData = new FormData();
        formData.append("file", file);

        setLoading(true);
        setError(null);
        setResult(null);

        try {
            const res = await uploadResumeWithJobs(formData, region);
            console.log("API Response:", res);
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

            <main className={styles.main}>
                <h2 className={styles.mainTitle}>Upload Your Resume</h2>
                <p className={styles.description}>
                    Upload your resume and we'll find the best job matches for you based on your <br />
                    <strong>skills and experience.</strong>
                </p>

                <RegionSelect region={region} setRegion={setRegion} />
                <ResumeUpload file={file} setFile={setFile} />

                <button
                    className={styles.findJobsBtn}
                    onClick={handleFindMatches}
                    disabled={loading}
                >
                    {loading ? "Uploading..." : "Find Job Matches"}
                </button>

                {error && <p className={styles.error}>{error}</p>}

                {result && (
                    <div className={styles.resultBox}>
                        <h4>Top Matching Jobs:</h4>
                        <ul>
                            {result.jobs?.slice(0, 5).map((job, index) => (
                                <li key={index}>
                                    <a href={job.redirect_url} target="_blank" rel="noopener noreferrer">
                                        {job.title}
                                    </a> at {job.company.display_name}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </main>
            <Footer />
        </div>
    );
}
