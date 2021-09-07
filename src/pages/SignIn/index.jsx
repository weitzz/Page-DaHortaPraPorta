import {Link } from 'react-router-dom';
import TemplateDefault from '../../Template';
import Button from '../../components/Button';
import Input from '../../components/Input';
import { BtnLink } from './style';


function SignIn({ children }) {
  return (
    <TemplateDefault>
      <h1>Login</h1>
      <Input title="CPF" />
      <Input title="Senha" type='password' />
      <br />
      <Button type="submit" variant='primary'>Entrar</Button>
      <br />
      <BtnLink to='/register'>Cadastrar</BtnLink>
      <div>
        <Link to='/forgotpassword'>Esqueceu a senha?</Link>
      </div> 
    </TemplateDefault>
  );
}

export default SignIn
