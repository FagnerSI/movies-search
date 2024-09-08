import { IStyled } from "~/types/styles";

export type InputProps = {
    value?: string, 
    placeholder?: string,
    name?: string, 
    onChange: (entry: string) => void;
} & Omit<React.HTMLAttributes<HTMLInputElement>, 'onChange'>;

export type InputOnChangeEvent = React.ChangeEvent<HTMLInputElement>;

export type InputOnKeyUpEvent = React.KeyboardEvent<HTMLInputElement>;


export interface InputStyledProps extends IStyled {
    value?: string, 
} 