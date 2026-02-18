import { GenericLisProps } from "./types";
import styles from "./GenericList.module.css";

export default function GenericList<U extends {id: string}>({items, renderProps, className}: GenericLisProps<U>) {
    return <ul className={`${styles.list} ${styles[className]}`}>
        {items.map((item) => {
            return <li key={item.id}>{renderProps(item)}</li>
        })}
    </ul>
}