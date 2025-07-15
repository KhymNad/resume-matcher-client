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
            <svg xmlns="http://www.w3.org/2000/svg" fill="#6b7280" viewBox="0 0 24 24" width="36" height="36">
            <path d="M16 16l-4 4-4-4h3v-4h2v4zM5 18v-1a4 4 0 1 1 0-8h1a5 5 0 0 1 9.9 1.3A4.5 4.5 0 0 1 19 14.5 4.5 4.5 0 0 1 16.5 19H5z" />
            </svg>
        </div>
        <div>
            <strong>Drop your resume here</strong>
            <br />
            or click to browse your files
        </div>
        <div className={styles.fileTypes}>
            <span>📄 PDF</span>
            <span>📝 Word</span>
            <span>• Max 5MB</span>
        </div>
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
