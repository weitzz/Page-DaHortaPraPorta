import styled from 'styled-components'
import { colors } from '../../style/Colors';
import { Link as LinkR } from 'react-router-dom';

export const BtnLink = styled(LinkR)`
  background: ${(props) => (props.variant === 'primary'? colors.greenLight : colors.grayLight )};
  color: ${(props) => (props.variant === 'primary'? colors.white : colors.greenLight )};
  font-size: 1.1rem;
  font-weight: 600;
  border: 1px solid;
  border-color: ${(props) => (props.variant === 'primary'? 'transparent' : colors.greenLight )};
  border-radius: 30px;
  height: 45px;
  padding:  12px;
  cursor: pointer;
  width: 100%;
  transition: 0.3s;

  &:hover{
    background: ${colors.greenLight}; 
     color: ${colors.white}; 
  }
`;