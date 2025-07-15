import React from 'react';
import styles from './RegionSelect.module.css';

export default function RegionSelect({ region, setRegion }) {
    return (
        <>
        <label htmlFor="region" className={styles.label}>Select Your Region</label>
        <select
            id="region"
            className={styles.select}
            value={region}
            onChange={(e) => setRegion(e.target.value)}
        >
            <option value="">Choose your region...</option>
            <option value="north-america">North America</option>
            <option value="europe">Europe</option>
            <option value="asia">Asia</option>
            {/* add more regions */}
        </select>
        </>
    );
}
