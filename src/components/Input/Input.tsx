import InputStyled from "./Input.styled";
import { InputProps, InputOnChangeEvent } from "./types";

export default function Input({
  name,
  placeholder,
  value,
  className,
  onChange,
  onKeyUp,
}: InputProps) {
  const onChangeText = ({ target }: InputOnChangeEvent) => {
    const { value } = target;

    onChange(value);
  };

  return (
    <InputStyled
      placeholder={placeholder}
      className={className}
      name={name}
      value={value}
      onKeyUp={onKeyUp}
      onChange={onChangeText}
    />
  );
}
