import styles from "./Content.module.css";
import { ContentProps } from "./types";
import { Routes, Route, useLocation, useNavigate, Navigate } from "react-router-dom";
import {CreateProduct, CardDetails, Main, Modal, EditProduct, Button} from "../../../components";

export default function Content(){
    const navigate = useNavigate();
    const location = useLocation();
    const background = location.state?.prevLocation;
    return  <div className={styles.content}>
                <Routes location={background || location}>
                    <Route path="/" element={<Navigate to="/products" replace /> }/>
                    <Route path="/products" element={<Main/>}/>
                    <Route path="/products/:id" element={<CardDetails/>}/>
                    <Route path="/create-product" element={<CreateProduct/>}/>
                    <Route path="/edit" element={<EditProduct/>}/>
                    <Route path="*" element={"Страница не найдена"}/>
                </Routes>
                {background && 
                    <Routes>
                        <Route path="/success-new" element={<Modal title="Карточка успешно создана" onClose={() => navigate(-1)}>
                            <Button 
                                disabled={false}
                                type="button"
                                className="button_back"
                                onClick={() => navigate(-1)}
                                >
                                Вернуться назад
                            </Button></Modal>}/>
                        <Route path="/success-edit" element={<Modal title="Карточка успешно изменена" onClose={() => navigate(-1)}>
                            <Button 
                                disabled={false}
                                type="button"
                                className="button_back"
                                onClick={() => navigate(-1)}
                                >
                                Вернуться назад
                            </Button>
                        </Modal>}/>
                    </Routes>
                }
            </div>
}

///success-edit