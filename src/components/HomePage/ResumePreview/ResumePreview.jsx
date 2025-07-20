import React from 'react';
import { motion as Motion } from 'framer-motion';
import styles from './ResumePreview.module.css';

export default function ResumePreviewSidebar({ file, onClose }) {
    if (!file) return null;

    const fileType = file.type;
    const fileURL = URL.createObjectURL(file);

    return (
        <Motion.aside
            className={styles.resumePreviewSection}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <div className={styles.header}>
                <h3>Uploaded Resume Preview</h3>
                <button className={styles.closeBtn} onClick={onClose} aria-label="Close sidebar">
                    ×
                </button>
            </div>

            <div className={styles.content}>
                <div className={styles.fileInfo}>
                    <p><strong>Filename:</strong> {file.name}</p>
                    <p><strong>Size:</strong> {(file.size / 1024).toFixed(2)} KB</p>
                </div>

                {/* Inline preview */}
                {fileType === 'application/pdf' && (
                    <iframe
                        src={fileURL}
                        title="PDF Preview"
                        className={styles.pdfPreview}
                    />
                )}

                {fileType.startsWith('image/') && (
                    <img src={fileURL} alt="Uploaded preview" className={styles.imagePreview} />
                )}

                {!fileType.startsWith('image/') && fileType !== 'application/pdf' && (
                    <p className={styles.unsupportedMsg}>Preview not available for this file type.</p>
                )}
            </div>
        </Motion.aside>
    );
}
