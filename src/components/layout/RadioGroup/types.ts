export interface RadioGroupProps {
    items: {title: string, value: string}[];
    name: string;
    className: string;
    onChange: (v: string) => void;
    currentValue: string;
}