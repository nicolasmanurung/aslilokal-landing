import * as S from "./styles";

const Button = ({ color, width, children, onClick, textColor }) => (
  <S.Button color={color} textColor={textColor} width={width} onClick={onClick}>
    {children}
  </S.Button>
);

export default Button;
