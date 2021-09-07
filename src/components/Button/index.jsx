import styled from "styled-components"
import { colors } from "../../style/Colors";

const Btn = styled.button`
  background: ${(props) => (props.variant === 'primary'? colors.greenLight : 'transparent' )};
  color: ${(props) => (props.variant === 'primary'? colors.white : colors.greenLight )};
  font-size: 1.1rem;
  font-weight: 600;
  border: 1px solid;
  border-color: ${(props) => (props.variant === 'primary'? 'transparent' : colors.greenLight )};
  border-radius: 30px;
  height: 45px;
  padding: 6px 12px;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;

  &:hover{
    background: transparent; 
     color: ${colors.greenLight}; 
    border: 1px solid ${colors.greenLight};
  }
`;



const Button = ({ children, variant }) => {

  return (
    <Btn variant={variant}>{children}</Btn>
  )
}

export default Button
