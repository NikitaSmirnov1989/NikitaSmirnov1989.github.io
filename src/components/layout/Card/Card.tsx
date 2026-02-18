import styles from "./Card.module.css";
import { CardProps } from "./types";
import favorite from "../../../assets/icons/favorite.svg";
import favoriteActive from "../../../assets/icons/favorite-active.svg";
import like from "../../../assets/icons/like.svg";
import likeActive from "../../../assets/icons/like-active.svg";
import garbage from "../../../assets/icons/garbage.svg";
import edit from "../../../assets/icons/edit.svg";
import Image from "../../ui/Image";
import Button from "../../ui/Button";
import { useAppDispatch } from "../../features/hooks";
import { changeField, remove } from "../../features/slices/listSlice";
import { useNavigate } from "react-router-dom";

const width = "20px";
const height = "20px"

export default function Card(props: CardProps){
    const {text, title, url, id, isFavorite, isLike} = props;
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    function handleCardClick(){
        navigate(`/products/${id}`, {
            state: {
                text, title, url,
            }
        });
    }
    return <div className={styles.card} onClick={() => handleCardClick()}>
            <Image
                url={url}
                alt="Картинка карточки"
                width="200px"
                height="200px"
                className="card_image"
                objetFit="cover"
                />
            <div className={styles.card_body}>
                <h2 className={styles.card_title}>
                    {title}
                </h2>
                <p className={styles.card_text}>
                    {text}
                </p>
                <div className={styles.card_icons}>
                    <Button
                        disabled={false}
                        type="button"
                        className="button_icon"
                        onClick={() => dispatch(changeField({field: "isLike", idx: id}))}
                        >
                        <Image
                            url={isLike ? likeActive : like}
                            alt="Иконка лайка"
                            width={width}
                            height={height}
                            className="card_icon"
                            objetFit="cover"
                            />
                    </Button>
                   <Button
                        disabled={false}
                        type="button"
                        className="button_icon"
                        onClick={() => dispatch(changeField({field: "isFavorite", idx: id}))}
                        >
                        <Image
                            url={isFavorite ? favoriteActive : favorite}
                            alt="Иконка избранного"
                            width={width}
                            height={height}
                            className="card_icon"
                            objetFit="cover"
                            />
                    </Button>
                    <Button
                        disabled={false}
                        type="button"
                        className="button_icon"
                        onClick={() => dispatch(remove({idx: id}))}
                        >
                        <Image
                            url={garbage}
                            alt="Иконка удаления"
                            width={width}
                            height={height}
                            className="card_icon"
                            objetFit="cover"
                            />
                        </Button>
                    <Button
                        disabled={false}
                        type="button"
                        className="button_icon"
                        onClick={() => navigate("/edit", {state: {text, title, url, id}})}
                        >
                        <Image
                            url={edit}
                            alt="Иконка редактирования"
                            width={width}
                            height={height}
                            className="card_icon"
                            objetFit="cover"
                            />
                        </Button>
                </div>
            </div>
    </div>
}