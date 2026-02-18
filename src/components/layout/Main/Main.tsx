import styles from "./Main.module.css";
import { MainProps } from "./types";
import { GenericList } from "../../../components";
import { useAppDispatch, useAppSelector } from "../../features/hooks";
import {Card} from "../../../components";
import { useState } from "react";
import {Input} from "../../../components";
import {RadioGroup} from "../../../components";
import { ListItem } from "../../features/slices/listSlice";
import {Pagination} from "../../../components";
import * as _ from "lodash";

const radioFilter = 
[
    {
        value: "id",
        title: "Все"
    },
    {
        value: "isLike",
        title: "Все лайки"
    },
    {
        value: "isFavorite",
        title: "Избранные"
    }
];

export default function Main(){
    const dispatch = useAppDispatch();
    const list = useAppSelector(state => state.list);
    const [search, setSearch] = useState<string>("");
    const [filter, setFilter] = useState<keyof ListItem>("id");
    const [currentPaginationPage, setCurrentPaginationPage] = useState<number>(0); /*Текущая страница пагинации*/ 
    const [chunkPagination, setChunkPagination] = useState<number>(5); /*Количество карточек на странице*/
    
    /*Фильтр массива с учетом поисковой строки. Фильтр по тексту и заголовку*/
    const filtered = list
    .filter((item) => {
        const pattern = new RegExp(search, 'i');
        return pattern.test(item.title) || pattern.test(item.text);
    })
    .filter(item => {
        return item[filter];
    });
    return  <div className={styles.main}>
                <div className={`container ${styles.main_container}`}>
                    <div className="row">
                        <Input
                                type="text"
                                onChange={(e) => setSearch(e.target.value)}
                                className=""
                                id="search"
                                label="Поиск"
                                value={search}
                                />
                    </div>
                    <div className="row">
                        <RadioGroup
                                items={radioFilter}
                                name="filter"
                                className="radio_group"
                                onChange={(value) => setFilter(value as keyof ListItem)}
                                currentValue={filter}
                                />
                    </div>
                    <div className="row">
                        {filtered.length === 0 ? <p>Список пустой</p> : <GenericList items={_.chunk(filtered, chunkPagination)[currentPaginationPage]} renderProps={(item) => <Card {...item}/>} className="cards_list"/>}
                    </div>
                    <div className="row">
                        <Pagination 
                            onClick={(val: number) => setCurrentPaginationPage(val)}
                            counter={Math.ceil(filtered.length/chunkPagination)}
                            currentPage={currentPaginationPage}/>
                    </div>
                </div>
            </div>
}
