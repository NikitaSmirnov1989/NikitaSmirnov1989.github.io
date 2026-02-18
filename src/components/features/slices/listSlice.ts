import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';



export type ListItem = {
    title: string; /*Заголовок карточки*/
    text: string; /*Текст карточки*/
    url: string; /*УРЛ для картинки*/
    id: string, /*Уникальный идентификатор для карточки из uuidv4*/
    isLike: boolean, /*Cостояние лайка для карточки*/
    isFavorite: boolean, /*Состояние в избранном или*/
};

type ListState = ListItem[];

const initialState: ListState = [
    {
        title: 'Первая карточка',
        text: 'Sed ut perspiciatis, unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam eaque ipsa, quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt, explicabo. Nemo enim ipsam voluptatem, quia voluptas sit, aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos, qui ratione voluptatem sequi nesciunt, neque porro quisquam est, qui dolorem ipsum, quia dolor sit, amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt, ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit, qui in ea v',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        id: uuidv4(),
        isLike: false,
        isFavorite: false,
    },
    {
        title: 'Первая карточка',
        text: 'Какой-то текст',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        id: uuidv4(),
        isLike: false,
        isFavorite: false,
    },
    {
        title: 'Первая карточка',
        text: 'Какой-то текст',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        id: uuidv4(),
        isLike: false,
        isFavorite: false,
    },
    {
        title: 'Первая карточка',
        text: 'Какой-то текст',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        id: uuidv4(),
        isLike: false,
        isFavorite: false,
    },
    {
        title: 'Первая карточка',
        text: 'Какой-то текст',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        id: uuidv4(),
        isLike: false,
        isFavorite: false,
    },
    {
        title: 'Первая карточка',
        text: 'Какой-то текст',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        id: uuidv4(),
        isLike: false,
        isFavorite: false,
    },
    {
        title: 'Первая карточка',
        text: 'Какой-то текст',
        url: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg',
        id: uuidv4(),
        isLike: false,
        isFavorite: false,
    }
];

const listSlice = createSlice({
    name: 'list',
    initialState: initialState,
    reducers: {
        add: (state, action: PayloadAction<{title: string, text: string, url: string }>) => {
            const newItem = {
                ...action.payload,
                id: uuidv4(),
                isLike: false,
                isFavorite: false,
            }
            state.push(newItem);
        },
        remove: (state, action: PayloadAction<{idx: string}>) => {
            /*Нашли местоположение элемента*/
            const i = state.findIndex((item) => {
                return item.id === action.payload.idx;
            });
            /*Удалили элемент */
            state.splice(i, 1);
        },
        /*Изменение поля лайка и избранное*/
        changeField: (state, action: PayloadAction<{idx:string, field: 'isLike' | 'isFavorite'}>) => {
            const i = state.findIndex((item => {
                return item.id === action.payload.idx;
            }));
            const newItem = {
                ...state[i],
                [action.payload.field]: !state[i][action.payload.field],
            }
            state.splice(i, 1, newItem);
        },
        edit: (state, action: PayloadAction<{title: string, text: string, url: string, id: string}>) => {
            const i = state.findIndex((item => {
                return item.id === action.payload.id;
            }));
            const {title, text, url} = action.payload;
            const newItem = {
                ...state[i],
                title, text, url,
            };
            state.splice(i, 1, newItem);
        }
    }
});

export const { add, remove, changeField, edit } = listSlice.actions

export default listSlice.reducer