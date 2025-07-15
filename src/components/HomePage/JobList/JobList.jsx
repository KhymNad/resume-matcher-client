import React from 'react';

function JobList({ jobs, loading }) {
    if (loading) return <p>Loading jobs...</p>;
    if (!jobs.length) return <p>No jobs matched yet. Upload a resume.</p>;

    return (
        <ul>
        {jobs.map(job => (
            <li key={job.id} style={{ marginBottom: '1rem' }}>
            <strong>{job.title}</strong> at {job.company}
            </li>
        ))}
        </ul>
    );
}

export default JobList;
