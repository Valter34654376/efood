import { Container, Social, Copy } from './styles'

const Footer = () => {
  return (
    <Container>
      <Social>
        <a href="#" aria-label="Instagram">📸</a>
        <a href="#" aria-label="Facebook">📘</a>
        <a href="#" aria-label="Twitter">🐦</a>
      </Social>
      <Copy>© 2025 efood — Todos os direitos reservados</Copy>
    </Container>
  )
}

export default Footer
