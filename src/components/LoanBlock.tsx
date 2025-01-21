import React, { useState } from 'react';
import styles from '../assets/LoanBlock.module.scss';
import CustomSliderInput from "./CustomSliderInput";

const LoanCalculator: React.FC = () => {
    const [selectedLoan, setSelectedLoan] = useState<string>('first'); // Устанавливаем первый заём по умолчанию

    const handleLoanSelect = (loanType:string): void => {
        setSelectedLoan(loanType);
    };

    const [money, setMoney] = useState<number>(1000);

    const handleInputChange = (newValue: number) => {
        setMoney(newValue);
    };
    const handleSliderChange = (newValue: number) => {
        setMoney(newValue);
    };

    return (
        <div className={styles.calcBlock}>
            <div className={styles.choosloan}>
                <div
                    className={`${styles.loanOption} ${selectedLoan === 'first' ? styles.selected : ''}`}
                    onClick={() => handleLoanSelect('first')}
                >
                    Первый заём
                </div>
                <div
                    className={`${styles.loanOption} ${selectedLoan === 'second' ? styles.selected : ''}`}
                    onClick={() => handleLoanSelect('second')}
                >
                    Повторный заём
                </div>
            </div>

            <CustomSliderInput
                label="Cумма"
                value={money}
                onInputChange={handleInputChange}
                onSliderChange={handleSliderChange}
            />
            <div className={styles.result}>

            </div>
            <div className={styles.button}>
                <button>Подать заявку</button>
            </div>
        </div>
    );
};

export default LoanCalculator;
