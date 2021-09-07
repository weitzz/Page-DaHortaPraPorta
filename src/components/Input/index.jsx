import styled from "styled-components"
import { colors } from "../../style/Colors";

const Textfield = styled.input`
  background: ${colors.grayLight};
  border: none;
  border-radius: 25px;
  padding: .75rem 1.5625rem 0;
  margin-bottom: 15px;
  padding: 15px 0 15px 25px;
  width: 100%;
  color: ${colors.gray};
  font-size: 1rem;
  font-weight: 400;
  border: 1px solid #e3e3e3;
`;

const Input = ({ title, type }) => {
  return (
    <Textfield type={type ? type : 'text'} placeholder={title} />
  )
}

export default Input
