import styles from "./Pagination.module.css";
import { PaginationProps } from "./types";

export default function Pagination({counter, onClick, currentPage}: PaginationProps){
    const paginationArray = Array(counter).fill(0);
    return  <ul className={styles.pagination}>
                {paginationArray.map((el, i) => {
                    return <li
                            key={i}
                            className={`button ${currentPage === i && styles.active}`}
                            onClick={() => onClick(i)}
                            >{i + 1}</li>
                })}
            </ul>
}