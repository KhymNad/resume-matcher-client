import React, { useState } from 'react';
import { HomeContext } from './HomeContextProvider';

export default function HomeProvider({ children }) {
    const [resumeFile, setResumeFile] = useState(null);
    const [parsedResume, setParsedResume] = useState(null);
    const [jobResults, setJobResults] = useState([]);
    const [region, setRegion] = useState('');
    const [activeSidebar, setActiveSidebar] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    return (
        <HomeContext.Provider
        value={{
            resumeFile, setResumeFile,
            parsedResume, setParsedResume,
            jobResults, setJobResults,
            region, setRegion,
            activeSidebar, setActiveSidebar,
            loading, setLoading,
            error, setError
        }}
        >
        {children}
        </HomeContext.Provider>
    );
}

