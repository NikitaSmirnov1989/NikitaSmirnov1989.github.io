export interface InputProps {
    type: "text" | "checkbox" | "radio";
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    className: string;
    id: string;
    value: string;
    valid?: boolean;
    label?: string;
    name?: string;
    checked?: boolean;
    errorMsg?: string;
    placeholder?: string;
}