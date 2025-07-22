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
                    <option value="au">🇦🇺 Australia</option>
                    <option value="at">🇦🇹 Austria</option>
                    <option value="be">🇧🇪 Belgium</option>
                    <option value="br">🇧🇷 Brazil</option>
                    <option value="ca">🇨🇦 Canada</option>
                    <option value="fr">🇫🇷 France</option>
                    <option value="de">🇩🇪 Germany</option>
                    <option value="in">🇮🇳 India</option>
                    <option value="it">🇮🇹 Italy</option>
                    <option value="mx">🇲🇽 Mexico</option>
                    <option value="nl">🇳🇱 Netherlands</option>
                    <option value="nz">🇳🇿 New Zealand</option>
                    <option value="pl">🇵🇱 Poland</option>
                    <option value="sg">🇸🇬 Singapore</option>
                    <option value="za">🇿🇦 South Africa</option>
                    <option value="es">🇪🇸 Spain</option>
                    <option value="ch">🇨🇭 Switzerland</option>
                    <option value="gb">🇬🇧 United Kingdom</option>
                    <option value="us">🇺🇸 United States</option>
                </select>
            </div>
        </>
    );
}
