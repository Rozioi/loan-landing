import React, {useState} from 'react';
import styles from '../assets/InteractiveContent.module.scss';
import LoanBlock from "./LoanBlock";

const InteractiveContent: React.FC = () => {
    return (
        <div className={styles.interactiveBlock}>
            <div className={styles.visualBlock}>
                <div className={styles.handVector}></div>
                <div className={styles.textBlock}>
                    <h2>
                        ZERO —
                        <span>значит </span>
                    </h2>
                    <p>
                        Первый заём с промокодом
                        "ZERO" - бесплатно! *
                        <span>
                            (активируйте промокод в Вашем Личном кабинете)
                        </span>
                    </p>
                </div>
            </div>
            <LoanBlock />
        </div>
    );
};

export default InteractiveContent;