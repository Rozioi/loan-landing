import React from 'react';
import styles from '../assets/EasyGet.module.scss';

const EasyGet: React.FC = () => {
    return (
        <div className={styles.easygetblock}>
            <h1>Получите заём просто</h1>
            <div className={styles.mainBlock}>
                <div className={styles.illustration}>
                    <div className={styles.circleBlock}>
                        <div className={styles.circle}>1</div>
                        <div className={styles.line}></div>
                        <div className={styles.circle}>2</div>
                        <div className={styles.line}></div>
                        <div className={styles.circle}>3</div>
                    </div>
                </div>
                <div className={styles.listInfo}>
                    <div className={styles.listItem}>
                        <p>Позвоните или оставьте заявку</p>
                        <span>Оставить заявку можно
                            <a href={'/bot/'}
                               style={{
                                   textDecoration: 'none',
                                   borderBottom: '2px solid #007bff',
                                   color: '#007bff',
                               }}
                            > заполнив форму </a>
                            на сайте</span>

                    </div>
                    <div className={styles.listItem}>
                        <p>Дождитесь принятия решения</p>
                        <span>Решение принимается всего за 1 минуту</span>
                    </div>
                    <div className={styles.listItem}>
                        <p>Получите деньги</p>
                        <span>Мы переведем Вам деньги на карту</span>
                    </div>
                </div>
            </div>
            <div className={styles.handVector}></div>
        </div>

    );
};

export default EasyGet;
