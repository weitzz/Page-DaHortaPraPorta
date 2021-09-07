import TemplateDefault from '../../Template'
import Input from '../../components/Input'
import Button from '../../components/Button'
import { Link } from 'react-router-dom'

const ForgotPassword = () => {
  return (
    <TemplateDefault>
      <h1>Recuperar senha</h1>
      <Input title='Email'/>
      <Button variant='primary'>Enviar</Button>
      <div>
        <Link to='/'>Fazer login</Link>
      </div>
    </TemplateDefault>
  )
}

export default ForgotPassword
