import TemplateDefault from '../../Template'
import { Link } from 'react-router-dom'
import Input from '../../components/Input'
import Button from '../../components/Button'


const SignIn = () => {
  return (
    <TemplateDefault>
      <h1>Cadastrar</h1>
      <Input title='Email' />
      <Input title='CPF' />
      <Input title="Senha" type="password" />
      <Button variant='primary' type="submit">Cadastrar</Button>
      <div>
        <Link to='/'>Fazer login</Link>
      </div>
    </TemplateDefault>
  )
}

export default SignIn
