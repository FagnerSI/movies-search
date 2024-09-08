import styled from 'styled-components';
import { ButtonProps, ButtonStyledProps } from './types';
import { IStyled } from '~/types/styles';
import breakpoints from '~/styles/breakpoints';
 

export const ButtonStyled = styled.button<Partial<ButtonProps> & IStyled>`
  background: ${
  ({ theme, variant }: ButtonStyledProps) => {
    return variant === 'secondary' ? theme.secondaryColor : theme.primaryColor
   }
  };
  color: ${({ theme, variant }: ButtonStyledProps) => {
    return variant === 'secondary' ? theme.primaryColor : theme.secondaryColor
   }
  };
  font-weight: ${({ theme }: ButtonStyledProps) => theme.fontExtraBold};
  border: none;
  font-size: 1em;
  padding: 0.8em 1.5em;
  border-radius: ${({ theme }: ButtonStyledProps) => theme.defaultRadius};
  cursor: pointer;
  height: 48px;
  min-width: 120px;

  &:hover {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.7;
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-weight: ${({ theme }: ButtonStyledProps) => theme.fontBold};
    font-size: 0.8em;
    padding: 0.6em 1.2em;
    box-sizing: border-box;
    height: 38px;
  }
 
  };
`;
