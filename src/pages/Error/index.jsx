import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { colors } from '../../style/Colors'
const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color:${colors.grayLight} ;

  div{
    width: 600px;
    height: 600px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    h1{
      font-size: 3rem;
      padding-bottom: 10px;
    }
    h2{
      font-size: 2rem;
      padding-bottom: 10px;
    }
    a{
      color: ${colors.green};
      font-weight: 600;
      text-decoration: underline;
    }
    
  }

`

const Erro = () => {
  return (
    <Container>
      <div>
        <h1>404</h1>
        <h2>Página não encontrada</h2>
        <Link to='/'>Voltar para página principal</Link>
      </div>
    </Container>
  )
}

export default Erro
