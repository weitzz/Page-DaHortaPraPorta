import { ContainerDefault, ContainerStamp, Container, ContainerSignInAndSigUn, Form } from './style'
import imageStamp from '../assets/logo.png'



const TemplateDefault = ({ children }) => {
  return (
    <ContainerDefault>
      <ContainerStamp>
        <img src={imageStamp} alt="Logo" />
      </ContainerStamp>
      <Container>
        <ContainerSignInAndSigUn>
          <Form>
            {children}
          </Form>
        </ContainerSignInAndSigUn>
      </Container>
    </ContainerDefault>
  )
}

export default TemplateDefault
