import React from 'react';
import styles from './ResumeUpload.module.css';

export default function ResumeUpload({ file, setFile }) {
    const handleFileChange = (e) => setFile(e.target.files[0]);

    const handleDrop = (e) => {
        e.preventDefault();
        setFile(e.dataTransfer.files[0]);
    };

    const handleDragOver = (e) => e.preventDefault();

    const openFileDialog = () => {
        document.querySelector('input[type=file]').click();
    };

    return (
        <div
            className={styles.dropArea}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onClick={openFileDialog}
        >
            <div className={styles.cloudIcon}>
                {/* SVG Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" width="48" height="48" fill="#6b7280">
                    <path d="..." />
                </svg>
            </div>

            <div>
                <strong>Drop your resume here</strong><br />
                or click to browse your files
            </div>

            <div className={styles.fileTypes}><span>📄 PDF, DOCX</span></div>

            <input
                type="file"
                accept=".pdf, .doc, .docx"
                className={styles.fileInput}
                onChange={handleFileChange}
                style={{ display: 'none' }}
            />

            <button
                type="button"
                className={styles.chooseFileBtn}
                onClick={(e) => {
                    e.stopPropagation();
                    openFileDialog();
                }}
            >
                ⬆ Choose File
            </button>

            {file && <p className={styles.selectedFile}>Selected file: {file.name}</p>}
        </div>
    );
}
