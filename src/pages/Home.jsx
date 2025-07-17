import React, { useState } from 'react';
import { Navbar, RegionSelect, ResumeUpload, Footer } from '../components'
import styles from './Home.module.css';

export default function Home() {
    const [region, setRegion] = useState('');
    const [file, setFile] = useState(null);

    const handleFindMatches = () => {
        if (!file || !region) {
        alert('Please select your region and upload a resume.');
        return;
        }
        // Your logic to find matches goes here
        alert(`Finding jobs for region: ${region}, file: ${file.name}`);
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

                <button className={styles.findJobsBtn} onClick={handleFindMatches}>
                    Find Job Matches
                </button>
            </main>
            <Footer />
        </div>
    );
}
