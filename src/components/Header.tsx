import React from 'react';
import { NavLink } from "react-router-dom";
import styles from '../assets/Header.module.scss';
import { FaRegUser } from "react-icons/fa";

const Header: React.FC = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={'./logo.png'} alt='logo'/>
            </div>
            <div className={styles.navLinkList}>
                <NavLink to={'/1'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                    О компании
                </NavLink>
                <NavLink to={'/'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                    Как получить деньги
                </NavLink>
                <NavLink to={'/2'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                    Как погасить заём
                </NavLink>
                <NavLink to={'/3'} className={({ isActive }) => isActive ? `${styles.link} ${styles.activeLink}` : styles.link}>
                    Зарплада вперёд
                </NavLink>
            </div>
            <div className={styles.button}>
                <FaRegUser />
                <p>ВОЙТИ</p>
            </div>
        </div>
    );
};

export default Header;
