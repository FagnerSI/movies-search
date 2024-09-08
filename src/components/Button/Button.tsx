import { ButtonStyled } from "~/components/Button/Button.styled";
import { ButtonProps } from "./types";

export default function Button({
  variant,
  title,
  className,
  disabled,
  onClick,
}: ButtonProps) {
  return (
    <ButtonStyled
      disabled={disabled}
      variant={variant}
      className={className}
      onClick={onClick}
    >
      {title}
    </ButtonStyled>
  );
}
