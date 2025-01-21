import React, { useState } from 'react';
import styles from '../assets/LoanBlock.module.scss';
import CustomSliderInput from "./CustomSliderInput";
import CustomSliderDayInput from "./CustomSliderDayInput";

const LoanCalculator: React.FC = () => {
    const [selectedLoan, setSelectedLoan] = useState<string>('first'); // Устанавливаем первый заём по умолчанию

    const handleLoanSelect = (loanType: string): void => {
        setSelectedLoan(loanType);
    };

    const [money, setMoney] = useState<number>(1000);
    const [day, setDay] = useState<number>(10);

    const handleInputDayChange = (newValue: number) => {
        setDay(newValue);
    };
    const handleSliderDayChange = (newValue: number) => {
        setDay(newValue);
    };
    const handleInputChange = (newValue: number) => {
        setMoney(newValue);
    };
    const handleSliderChange = (newValue: number) => {
        setMoney(newValue);
    };

    // Функция расчёта срока погашения
    const calculateDueDate = (daysToAdd: number): string => {
        const today = new Date();
        today.setDate(today.getDate() + daysToAdd);

        // Форматируем дату в формате "дд.мм.гггг"
        const day = today.getDate().toString().padStart(2, '0');
        const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Месяцы от 0 до 11
        const year = today.getFullYear();

        return `${day}.${month}.${year}`;
    };

    const dueDate = calculateDueDate(day);

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
            <CustomSliderDayInput
                label="На срок"
                value={day}
                onInputChange={handleInputDayChange}
                onSliderChange={handleSliderDayChange}
            />
            <div className={styles.result}>
                <div>
                    <p>ВЫ БЕРЁТЕ</p>
                    <span>{money} ₽</span>
                </div>
                <div>
                    <p>СРОК ПОГАШЕНИЯ</p>
                    <span>{dueDate}</span>
                </div>
                <div>
                    <p>СУММА К ВОЗВРАТУ</p>
                    <span>{money} ₽</span>
                </div>
            </div>
            <div className={styles.button}>
                <button>Подать заявку</button>
            </div>
        </div>
    );
};

export default LoanCalculator;
