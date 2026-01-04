import * as S from './styles'
import logo from '../../assets/logo.png'

const Header = () => {
  return (
    <S.Container>
      <S.Content>
        <S.Left>Restaurantes</S.Left>

        <S.Logo>
          <img src={logo} alt="efood" />
        </S.Logo>

        <S.CartButton>
          0 produto(s) no carrinho
        </S.CartButton>
      </S.Content>
    </S.Container>
  )
}

export default Header
