import styles from "./CardDetails.module.css";
import {CardDetailsProps} from './types';
import {Button, Image} from "../../../components";
import { useNavigate, useLocation } from "react-router-dom";


export default function CardDetails(){
    const location = useLocation();
    const {title, text, url} = location.state;
    const navigate = useNavigate();
    return <div className={styles.details}>
        <div className="container">
            <div className="row">
                <Image
                    width="70%"
                    height=""
                    url={url}
                    alt="Избражение"
                    className=""
                    objetFit="cover"
                    />
                <h2>{title}</h2>
                <p>{text}</p>
                <Button
                    disabled={false}
                    onClick={() => navigate(-1)}
                    type="button"
                    className="button"
                    >Назад</Button>
            </div>
        </div>
    </div>
}
