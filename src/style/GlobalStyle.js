import { createGlobalStyle } from "styled-components";
import {colors} from './Colors'
 const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap');
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;

}

  body{
    font-family: 'Roboto', sans-serif;
    font-size: 16px;
    /* background-color: ${colors.green}; */
  }

a{
  text-decoration: none;
}

li{
  list-style: none;
}
`;
export default GlobalStyle

