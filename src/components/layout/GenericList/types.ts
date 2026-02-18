export interface GenericLisProps<T extends {id: string}> {
    items: T[];
    renderProps: (item: T) => React.ReactNode;
    className: string;
}