import styles from "./Modal.module.css";
import { useEffect } from "react";
import { ModalProps } from "./types";
import {Button} from "../../../components";
import {Image} from "../../../components";
import close from "../../../assets/icons/close.svg";

export function Modal({title, children, onClose}: ModalProps){

    useEffect(() => {
        function handleEsc(e: KeyboardEvent) {
            e.key === 'Escape' && onClose();
        }
        document.addEventListener('keydown', handleEsc);
        return () => {
            document.removeEventListener('keydown', handleEsc);
        }
    }, [onClose]);

    return  <div className={styles.modal}>
                <div className={styles.modal_window}>
                    <div className={styles.modal_header}>
                        <h2 className={styles.title}>{title}</h2>
                        <Button
                            onClick={() => onClose()}
                            disabled={false}
                            type='button'
                            className="button_modal"
                            >
                            <Image
                                width="40px"
                                height="40px"
                                alt='Кнопка закрытия модального окна'
                                url={close}
                                className=""
                                objetFit="cover"/>
                        </Button>
                    </div>
                    <div className={styles.modal_content}>
                        {children}
                    </div>
                </div>
                <div className={styles.overlay} onClick={() => onClose()}></div>
            </div>
}