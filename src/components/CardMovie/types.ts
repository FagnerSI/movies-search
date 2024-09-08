import { IStyled } from "~/types/styles";

export type CardMovieProps = {
    title: string, 
    description: string, 
    footerText?: string,
    imagePath: string,
    key?: string | number, 
    onClick?: (event: MouseEvent) => void;
} & React.HTMLAttributes<HTMLDivElement>;

export interface CardMovieStyledProps extends IStyled {
    description: string,
} 