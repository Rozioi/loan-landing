import React from "react";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { GoStopwatch } from "react-icons/go";
import { FaStopwatch20 } from "react-icons/fa";
import { TbCalendarClock } from "react-icons/tb";
import { LuCrown } from "react-icons/lu";
import { MdOutlineSecurity } from "react-icons/md";
import { PiShootingStar } from "react-icons/pi";
import styles from "../assets/OurAdvant.module.scss";

const OurAdvant: React.FC = () => {
    return (
        <div className={styles.advantages}>
            <h1 className={styles.title}>Наши преимущества</h1>
            <div className={styles.grid}>
                <div className={`${styles.item} ${styles.main}`}>
                    <IoIosCheckmarkCircleOutline className={styles.icon} />
                    <h2>90%</h2>
                    <span>одобрения</span>
                </div>
                <div className={styles.item}>
                    <GoStopwatch className={styles.icon} />
                    <span>Деньги за одну минуту после одобрения</span>
                </div>
                <div className={styles.item}>
                    <FaStopwatch20 className={styles.icon} />
                    <span>Погашение займа 20 часов без комиссии</span>
                </div>
                <div className={styles.item}>
                    <TbCalendarClock className={styles.icon} />
                    <span>Продление без штрафов</span>
                </div>
                <div className={styles.item}>
                    <LuCrown className={styles.icon} />
                    <span>Премиум услуги для постоянных клиентов</span>
                </div>
                <div className={styles.item}>
                    <MdOutlineSecurity className={styles.icon} />
                    <span>Безопасность персональных данных</span>
                </div>
                <div className={styles.item}>
                    <PiShootingStar className={styles.icon} />
                    <span>Улучшение кредитной истории</span>
                </div>
            </div>
        </div>
    );
};

export default OurAdvant;
