import React, { useEffect, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import styles from './ResumePreview.module.css';
import { renderAsync } from 'docx-preview';

export default function ResumePreviewSidebar({ file, onClose }) {
    const [textContent, setTextContent] = useState('');

    useEffect(() => {
        if (!file) return;

        const fileType = file.type;

        // Handle TXT
        if (fileType === 'text/plain') {
            const reader = new FileReader();
            reader.onload = (e) => setTextContent(e.target.result);
            reader.readAsText(file);
        }

        // Handle DOCX with styling
        if (
            file.name.endsWith('.docx') &&
            (fileType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document' || !fileType)
        ) {
            const reader = new FileReader();
            reader.onload = async (e) => {
                const buffer = e.target.result;
                const container = document.getElementById('docx-preview-container');
                if (container) {
                    container.innerHTML = ''; // clear previous content
                    try {
                        await renderAsync(buffer, container);
                    } catch {
                        container.innerHTML = '<p>Failed to render DOCX file.</p>';
                    }
                }
            };
            reader.readAsArrayBuffer(file);
        }
    }, [file]);

    if (!file) return null;

    const fileType = file.type;
    const fileURL = URL.createObjectURL(file);

    return (
        <Motion.aside
            className={styles.resumePreviewSection}
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 400, opacity: 0 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
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

                {/* PDF Preview */}
                {fileType === 'application/pdf' && (
                    <iframe
                        src={fileURL}
                        title="PDF Preview"
                        className={styles.pdfPreview}
                    />
                )}

                {/* Image Preview */}
                {fileType.startsWith('image/') && (
                    <img src={fileURL} alt="Uploaded preview" className={styles.imagePreview} />
                )}

                {/* Text File Preview */}
                {fileType === 'text/plain' && (
                    <pre className={styles.textPreview}>{textContent}</pre>
                )}

                {/* DOCX Preview with styles */}
                {file.name.endsWith('.docx') && (
                    <div id="docx-preview-container" className={styles.docxPreview}></div>
                )}

                {/* Unsupported Message */}
                {!fileType.startsWith('image/') &&
                    fileType !== 'application/pdf' &&
                    fileType !== 'text/plain' &&
                    !file.name.endsWith('.docx') && (
                        <p className={styles.unsupportedMsg}>Preview not available for this file type.</p>
                    )}
            </div>
        </Motion.aside>
    );
}
