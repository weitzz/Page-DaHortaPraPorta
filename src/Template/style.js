import styled from "styled-components"
import { colors } from '../style/Colors'

import background from '../assets/backgroundDesktop.svg'

export const ContainerDefault = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  background-image: url(${background});
  background-repeat: repeat-x;
  background-color: ${colors.green};
  
  @media(max-width: 700px){
    flex-direction: column;
    flex-wrap: nowrap;
  }
`;

export const Container = styled.div`
  width: 60%;
  height: 95vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:${colors.white};
  border-radius: 10px 0 0 10px;

  @media(max-width: 700px){
    width: 100%;
    border-radius: 10px 10px 0 0;
  }


  h1{
    padding: 20px;
    color: ${colors["gray-800"]};
  }
`;

export const ContainerStamp = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    max-width: 400px;
    filter: drop-shadow(0 4px 4px rgba(0,0,0,.4));
  }

  @media(max-width: 700px){
    img{
      width: 80%;
    }
  }
`;


export const ContainerSignInAndSigUn = styled.div`
  display: flex;
  text-align: center;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: min-content;

  @media(max-width: 700px){
    margin: 0 1rem;
  }
  div {
    text-align: center;
    margin-top: 30px;

    a{
      color: ${colors.gray};
      font-weight: 600;
      font-size: 0.8rem;

    }
  }
`;


