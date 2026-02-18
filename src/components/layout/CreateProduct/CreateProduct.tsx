import styles from "./CreateProduct.module.css";
import { CreateProductProps } from "./types";
import { Input, Button } from "../../../components";
import { useForm } from "../../features/hooks";
import { useNavigate, useLocation, Link } from "react-router-dom";
import { add } from "../../features/slices/listSlice";
import { useAppDispatch } from "../../features/hooks";

const initialForm = {
    title: "Введите заголовок",
    text: "Введите текст",
    url: "Вставке url-избражения"
}

export default function CreateProduct(){
    function handleSubmit(e: React.ChangeEvent<HTMLFormElement>){
        e.preventDefault();
    }
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const location = useLocation();

    const{form, handleForm} = useForm(initialForm);
    
    function resetForm(){
        handleForm("title", initialForm.title);
        handleForm("text", initialForm.text);
        handleForm("url", initialForm.url);
    }

    function handleClick(){
        dispatch(add(form));
        navigate("/success-new", {state: {prevLocation: location}});
        resetForm();
    }
    return  <div className={styles.createProduct}>
                <form 
                    className={styles.form} 
                    onSubmit={(e) => handleSubmit(e)}>
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
                        >
                        Создать новую карточку
                    </Button>
                </form>
            </div>
}