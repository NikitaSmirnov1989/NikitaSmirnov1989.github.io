export interface ButtonProps {
    disabled: boolean;
    children: React.ReactNode;
    type: "button" | "submit";
    onClick: () => void;
    className: string;
}