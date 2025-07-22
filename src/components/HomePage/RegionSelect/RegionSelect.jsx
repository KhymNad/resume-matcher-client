import React from 'react';
import styles from './RegionSelect.module.css';

export default function RegionSelect({ region, setRegion }) {
    return (
        <>
            <div className={styles.regionSelect}>
                <label htmlFor="region" className={styles.label}>Select Your Region</label>
                <select
                id="region"
                className={styles.select}
                value={region}
                onChange={(e) => setRegion(e.target.value)}
                >
                <option value="" disabled>Select a region...</option>
                <option value="us">🇺🇸 United States</option>
                <option value="ca">🇨🇦 Canada</option>
                <option value="gb">🇬🇧 United Kingdom</option>
                <option value="au">🇦🇺 Australia</option>
                <option value="de">🇩🇪 Germany</option>
                </select>
            </div>
        </>
    );
}
