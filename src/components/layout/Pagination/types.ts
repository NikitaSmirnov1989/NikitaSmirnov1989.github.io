export interface PaginationProps{
    onClick: (val: number) => void;
    counter: number; /*Общее количество страниц*/
    currentPage: number;
}