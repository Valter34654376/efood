import { Container, Logo, Social, Copy } from './styles'

import logo from '../../assets/logo.png'
import insta from '../../assets/insta.png'
import face from '../../assets/face.png'
import tuit from '../../assets/tuit.png'

const Footer = () => {
  return (
    <Container>
      <Logo src={logo} alt="efood" />

      <Social>
        <a href="#" aria-label="Instagram">
          <img src={insta} alt="Instagram" />
        </a>

        <a href="#" aria-label="Facebook">
          <img src={face} alt="Facebook" />
        </a>

        <a href="#" aria-label="Twitter">
          <img src={tuit} alt="Twitter" />
        </a>
      </Social>

      <Copy>
        A efood é uma plataforma para divulgação de estabelecimentos, a
        responsabilidade pela entrega, qualidade dos produtos é toda do
        estabelecimento contratado.
      </Copy>
    </Container>
  )
}

export default Footer
