import styles from "./Button.module.css";
import { ButtonProps } from "./types";

export default function Button({disabled, children, type, onClick, className}: ButtonProps){
    return <button 
            disabled={disabled}
            type={type}
            onClick={(e) => (e.stopPropagation(), onClick())}
            className={`button ${styles.button} ${styles[className]}`}
            >{children}</button>
}