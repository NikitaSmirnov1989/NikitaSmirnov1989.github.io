import styles from "./EditProduct.module.css";
import { EditProductProps } from "./types";
import {Input, Button} from "../../../components";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "../../features/hooks";
import { useAppDispatch } from "../../features/hooks";
import { edit } from "../../features/slices/listSlice";

export default function EditProduct(){
    const dispatch = useAppDispatch();
    const location = useLocation();
    const navigate = useNavigate();
    const {title, text, url, id} = location.state;
    const {form, handleForm} = useForm({title, text, url});

    function handleClick(){
        dispatch(edit({...form, id}));
        navigate("/success-edit", {state:{prevLocation: location}});
    }

    return  <div className={styles.editProduct}>
                <form 
                    className={styles.form} 
                    onSubmit={(e) => e.preventDefault()}>
                    <Input
                        type="text"
                        onChange={(e) => handleForm("title", e.target.value)}
                        className=""
                        id="title"
                        value={form.title}
                        valid={form.title.length >= 2}
                        errorMsg="Не менее 2 символов"
                        placeholder="Введите заголовок"
                        />
                    <Input
                        type="text"
                        onChange={(e) => handleForm("text", e.target.value)}
                        className=""
                        id="text"
                        value={form.text}
                        valid={form.text.length >= 2}
                        errorMsg="Не менее 2 символов"
                        placeholder="Введите текст"
                        />
                    <Input
                        type="text"
                        onChange={(e) => handleForm("url", e.target.value)}
                        className=""
                        id="url"
                        value={form.url}
                        valid={form.url.length >= 2}
                        errorMsg="Должен быть url"
                        placeholder="Вставки url-картинки"
                        />
                    <Button
                        disabled={false}
                        type="submit"
                        className=""
                        onClick={() => handleClick()}
                        >Изменить карточку
                    </Button>
                </form>
            </div>
}