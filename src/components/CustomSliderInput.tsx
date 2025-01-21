import React, { useState } from "react";
import styles from "../assets/CustomSliderInput.module.scss";

interface CustomSliderInputProps {
    label: string;
    value: number;
    onInputChange: (value: number) => void;
    onSliderChange: (value: number) => void;
}

const CustomSliderInput: React.FC<CustomSliderInputProps> = ({label, value, onInputChange, onSliderChange,}) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Math.max(1000, Math.min(5000, parseInt(e.target.value, 10) || 0));
        onInputChange(inputValue);
    };

    const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        onSliderChange(parseInt(e.target.value, 10));
    };
    return (
        <div className={styles["custom-slider-input"]}>
            <label>{label}</label>
            <div className={styles["input-wrapper"]}>
                <input
                    type="number"
                    min="1000"
                    max="5000"
                    step="100"
                    value={value}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles["slider-wrapper"]}>
                <input
                    type="range"
                    min="1000"
                    max="5000"
                    step="100"
                    value={value}
                    onChange={handleSliderChange}
                />
                <div className={styles["tick-marks"]}>
                    {[1000, 2000, 3000, 4000, 5000].map((tick) => (
                        <span
                            key={tick}
                            className={styles["tick"]}
                            style={{ left: `${(tick - 1000) / 40}%` }}
                        >
              {tick / 1000}k
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSliderInput;
