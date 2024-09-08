import { IStyled } from "~/types/styles";

export type ButtonProps = {
    title: string, 
    variant?: 'primary' | 'secondary',
    onClick: (event: MouseEvent) => void;
} & React.HTMLAttributes<HTMLButtonElement>;

export interface ButtonStyledProps extends IStyled {
    variant?: ButtonProps['variant'],
} 