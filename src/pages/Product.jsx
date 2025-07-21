import React from 'react';
import styles from './Product.module.css';
import { Navbar, Footer } from '../components';
import { motion as Motion } from 'framer-motion';

export default function Product() {
    return (
        <div className={styles.page}>
            <Navbar />

            <main className={styles.main}>
                <Motion.section
                    className={styles.section}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>How It Works</h2>
                    <ol className={styles.steps}>
                        <li>
                            <strong>Upload Resume (PDF)</strong> – The user uploads a PDF resume, which is processed by a Python microservice using PDFPlumber.
                        </li>
                        <li>
                            <strong>Extract Key Data</strong> – Hugging Face NER extracts skills, education, job titles, and experience from the resume text.
                        </li>
                        <li>
                            <strong>Match Skills</strong> – Parsed skills are matched against a vectorized ESCO skill database stored in Supabase with pgvector support.
                        </li>
                        <li>
                            <strong>Fetch Jobs</strong> – The app uses the Adzuna API to fetch real-time job postings that match the parsed skills and selected region.
                        </li>
                        <li>
                            <strong>Display Results</strong> – Job matches and resume previews are shown in a toggleable sidebar with interactive UI.
                        </li>
                    </ol>
                </Motion.section>

                <Motion.section
                    className={styles.section}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    viewport={{ once: true }}
                >
                    <h2 className={styles.title}>Features</h2>
                    <ul className={styles.features}>
                        <li><strong>AI Resume Parsing:</strong> Uses Hugging Face NER for entity extraction from raw PDF text.</li>
                        <li><strong>Python Microservice:</strong> Lightweight Flask app handles high-accuracy resume parsing using PDFPlumber.</li>
                        <li><strong>Live Job Listings:</strong> Fetches jobs from Adzuna API based on matched skills and user-selected location.</li>
                        <li><strong>Multi-Service Architecture:</strong> Combines .NET 6 Web API, Python microservice, and third-party APIs.</li>
                        {/* <li><strong>Swagger-Enabled API:</strong> Built-in Swagger UI for testing all endpoints (e.g., upload, match, fetch jobs).</li> */}
                        <li><strong>Deployable to Render:</strong> Dockerized backend with Python and .NET services deployable to Render or any cloud provider.</li>
                        <li><strong>Modern UI:</strong> Built with React, Framer Motion, and toggleable sidebars for resume/job results.</li>
                    </ul>
                </Motion.section>
            </main>

            <Footer />
        </div>
    );
}
