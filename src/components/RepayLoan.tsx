import React from 'react';
import styles from '../assets/RepayLoan.module.scss';

const RepayLoan: React.FC = () => {
    const rows = [
        { card: 'Карта 1', details: 'Перечисление 1', time: '10:00', button: 'Погасить' },
        { card: 'Карта 2', details: 'Перечисление 2', time: '11:00', button: 'Погасить' },
        { card: 'Карта 3', details: 'Перечисление 3', time: '12:00', button: 'Погасить' },
        { card: 'Карта 4', details: 'Перечисление 4', time: '13:00', button: 'Погасить' },
    ];

    return (
        <div className={styles.container}>
            <h1>Как погасить заём</h1>
            <div className={styles.header}>
                <div>Карта</div>
                <div>Способы погашения</div>
                <div>Срок погашения</div>
                <div></div>
            </div>

            <div className={styles.rowsContainer}>
                {rows.map((row, index) => (
                    <div key={index} className={styles.row}>
                        <div>{row.card}</div>
                        <div>{row.details}</div>
                        <div>{row.time}</div>
                        <button>{row.button}</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default RepayLoan;
