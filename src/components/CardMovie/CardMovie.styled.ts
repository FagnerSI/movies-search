import styled from 'styled-components';
import {  CardMovieProps, CardMovieStyledProps } from './types';
import { IStyled } from '~/types/styles';


export const CardContainer = styled.div<Partial<CardMovieStyledProps>>`
  display: flex;
  flex-direction: column;
  min-width: 300px;
  max-width: 25%;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  cursor: pointer;
  transition: all 0.6s ease;

  &:hover {
   transform: scale(1.03);
  }
  
  &:active {
   opacity: 0.5;
  }
`;

export const CardImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding: 15px;
`;

export const CardTitle = styled.span<Partial<CardMovieStyledProps>>`
  font-size: 18px;
  margin: 10px 0;
  color: ${({ theme })=> theme.primaryFontColor};
`;

export const CardDescription = styled.p<Pick<CardMovieProps, 'description'> | IStyled>`
  font-size: 14px;
  color: ${({ theme })=> theme.secondaryFontColor};
  margin-bottom: 16px;
`;

export const CardFooter = styled.div<Partial<CardMovieStyledProps>>`
  font-size: 12px;
  color: ${({ theme })=> theme.lightFontColor};
  padding: 16px;
  text-align: right;
`;