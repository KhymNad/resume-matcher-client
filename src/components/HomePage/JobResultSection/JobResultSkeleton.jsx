import React, { useEffect, useRef, useState } from 'react';
import { motion as Motion } from 'framer-motion';
import styles from './JobResultSkeleton.module.css';

export default function JobResultSkeleton() {
    const wrapperRef = useRef(null);
    const [cardCount, setCardCount] = useState(7);

    useEffect(() => {
        if (wrapperRef.current) {
            const wrapperHeight = wrapperRef.current.clientHeight;
            const estimatedCardHeight = 100;
            const count = Math.floor(wrapperHeight / estimatedCardHeight);
            setCardCount(count);
        }
    }, []);

    return (
        <Motion.div
            className={styles.skeletonWrapper}
            ref={wrapperRef}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 50 }}
            transition={{ duration: 0.4, ease: 'easeInOut' }}
        >
            {Array.from({ length: cardCount }).map((_, i) => (
                <Motion.div
                    key={i}
                    className={styles.skeletonCard}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.05 }}
                >
                    <div className={styles.skeletonTitle}></div>
                    <div className={styles.skeletonLine}></div>
                    <div className={styles.skeletonLine}></div>
                </Motion.div>
            ))}
        </Motion.div>
    );
}
