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
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                    <path d="M288 109.3L288 352c0 17.7-14.3 32-32 32s-32-14.3-32-32l0-242.7-73.4 73.4c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l128-128c12.5-12.5 32.8-12.5 45.3 0l128 128c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L288 109.3zM64 352l128 0c0 35.3 28.7 64 64 64s64-28.7 64-64l128 0c35.3 0 64 28.7 64 64l0 32c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64l0-32c0-35.3 28.7-64 64-64zM432 456a24 24 0 1 0 0-48 24 24 0 1 0 0 48z"/>
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
