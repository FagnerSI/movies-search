import styled from 'styled-components';
import { InputStyledProps } from './types';
import { IStyled } from '~/types/styles';
import breakpoints from '~/styles/breakpoints';

const InputStyled = styled.input<Partial<InputStyledProps> & IStyled>`
  padding: 0.8em 1.5em;
  font-size: 1em;
  box-sizing: border-box;
  border-radius: ${({ theme }: InputStyledProps) => theme.defaultRadius};
  border: transparent;
  outline: none;
  height: 48px;
  color: ${({ theme }: InputStyledProps) => theme.primaryColor};
  transition: border-color 0.3s ease;

  &:focus {
    border: 3px solid ${({ theme }: InputStyledProps) => theme.secondaryColor};
  }

  &::placeholder {
    color: ${({ theme }: InputStyledProps) => theme.lightFontColor};
  }

  @media (max-width: ${breakpoints.mobile}) {
    font-weight: ${({ theme }: InputStyledProps) => theme.fontBold};
    font-size: 0.8em;
    padding: 0.6em 1.2em;
    height: 38px;
  }
`;

export default InputStyled;