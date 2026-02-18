import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

export default function Header(){
    return <header className={styles.header}>
        <div className="container">
            <div className="row">
                <ul className={styles.nav_list}>
                    <li className={styles.nav_item}>
                        <NavLink 
                            to="/"
                            className={({ isActive, isPending }) => isPending ? "" : isActive ? styles.active : ""}
                            >Главная</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink 
                            to="/products"
                            className={({ isActive, isPending }) => isPending ? "" : isActive ? styles.active : ""}
                            >Список всех карточек</NavLink>
                    </li>
                    <li className={styles.nav_item}>
                        <NavLink 
                            to="/create-product"
                            className={({ isActive, isPending }) => isPending ? "" : isActive ? styles.active : ""}
                            >Создать новую карточку</NavLink>
                    </li>
                </ul>
            </div>
        </div>
    </header>
}