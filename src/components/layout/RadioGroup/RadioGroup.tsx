import styles from "./RadioGroup.module.css";
import { RadioGroupProps } from "./types";
import {Input} from "../../../components";

export default function RadioGroup({items, name, className, onChange, currentValue}: RadioGroupProps){
    return  <div className={`${styles.radio} ${styles[className]}`}>
                {items.map(({title, value}) => {
                    return  <Input
                                key={value}
                                type="radio"
                                onChange={() => onChange(value)}
                                className=""
                                id={title}
                                value={value}
                                name={name}
                                checked={value ===currentValue}
                                label={title}
                                />
                })}
            </div>
}