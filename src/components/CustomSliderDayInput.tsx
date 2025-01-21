import React from "react";
import styles from "../assets/CustomSliderInput.module.scss";

interface CustomSliderInputProps {
    label: string;
    value: number;
    onInputChange: (value: number) => void;
    onSliderChange: (value: number) => void;
}

const CustomSliderDayInput: React.FC<CustomSliderInputProps> = ({
                                                                    label,
                                                                    value,
                                                                    onInputChange,
                                                                    onSliderChange,
                                                                }) => {
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const inputValue = Math.max(30, Math.min(365, parseInt(e.target.value, 10) || 0));
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
                    min="30"
                    max="365"
                    step="1"
                    value={value}
                    onChange={handleInputChange}
                />
            </div>
            <div className={styles["slider-wrapper"]}>
                <input
                    type="range"
                    min="30"
                    max="365"
                    step="1"
                    value={value}
                    onChange={handleSliderChange}
                />
                <div className={styles["tick-marks"]}>
                    {[30, 90, 180, 270, 365].map((tick) => (
                        <span
                            key={tick}
                            className={styles["tick"]}
                            style={{ left: `${((tick - 30) / (365 - 30)) * 100}%` }}
                        >
              {tick} days
            </span>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSliderDayInput;
