import React, { useState } from 'react';
import styles from '../assets/LoanBlock.module.scss';

const LoanCalculator: React.FC = () => {
    const [selectedLoan, setSelectedLoan] = useState<string>('first'); // Устанавливаем первый заём по умолчанию

    const handleLoanSelect = (loanType:string): void => {
        setSelectedLoan(loanType);
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
            <div className={styles.custInput}>
                <label>Введите сумму</label>
                <input type="range" min="1000" max="50000" />
            </div>
            <div className={styles.custInput}>
                <label>Выберите срок</label>
                <input type="range" min="1" max="24" />
            </div>
            <div className={styles.result}>
                {/* Здесь будет отображаться результат */}
            </div>
            <div className={styles.button}>
                <button>Оформить</button>
            </div>
        </div>
    );
};

export default LoanCalculator;
