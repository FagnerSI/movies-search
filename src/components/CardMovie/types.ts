import { IStyled } from "~/types/styles";

export type CardMovieProps = {
    title: string, 
    description: string, 
    footerText?: string,
    imagePath: string,
    key?: string | number, 
    className?: string,
    onClick?: (params?: unknown) => void;
};

export interface CardMovieStyledProps extends IStyled {
    description: string,
} 