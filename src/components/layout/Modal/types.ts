export type ModalProps = {
    title: string; /*Заголовок модального окна*/
    children: React.ReactNode; /*Внутреннее содержимое модального окна*/
    onClose: () => void; /*Функция закрытия модального окна*/
}