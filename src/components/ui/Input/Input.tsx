import styles from "./Input.module.css";
import { InputProps } from "./types";

export default function Input({type, onChange, className, id, value, ...props}: InputProps) {
    return <div className={styles.inputField}>
        <input 
            type={type}
            onChange={(e) => onChange(e)}
            className={`${styles.input} ${styles[className]}`}
            id={id}
            value={value}
            name={props?.name}
            checked={props?.checked}
            placeholder={props?.placeholder}
            />
            {props?.label && <label htmlFor={id}>{props.label}</label>}
            {/* props?.errorMsg &&  */!props?.valid && <span className={styles.input_error}>{props?.errorMsg}</span>}
    </div>
}