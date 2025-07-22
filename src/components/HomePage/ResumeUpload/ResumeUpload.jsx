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

            <div className={styles.fileTypes}>
                <span className={styles.pdfIcon}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                    <path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 288c0 35.3-28.7 64-64 64L64 512c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128z"/>
                    </svg>
                </span>
                <span>.pdf, .doc, .docx</span>
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
                Choose File
            </button>

            {file && (
                <div className={styles.previewContainer}>
                    <p className={styles.selectedFile}>
                        <strong>Selected file:</strong> {file.name}
                    </p>
                    {/* <a
                        href={URL.createObjectURL(file)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={styles.previewLink}
                    >
                        View File
                    </a> */}
                </div>
            )}
        </div>
    );
}
