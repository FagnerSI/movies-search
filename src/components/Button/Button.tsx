import { ButtonStyled } from "~/components/Button/Button.styled";
import { ButtonProps } from "./types";

export default function Button({
  variant,
  title,
  className,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled variant={variant} className={className} onClick={onClick}>
      {title}
    </ButtonStyled>
  );
}
