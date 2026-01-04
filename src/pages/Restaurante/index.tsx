import HeaderRestaurant from '../../components/HeaderRestaurant'
import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import Cart from '../../components/Cart'
import styled from 'styled-components'
import { useParams, useNavigate } from 'react-router-dom'

import japonesaImg from '../../assets/japonesa.png'
import pizzaImg from '../../assets/pizza.png'
import hamburguerImg from '../../assets/hamburguer.png'
import massasImg from '../../assets/massas.png'

const Banner = styled.div<{ bg: string }>`
  background-image: url(${props => props.bg});
  height: 280px;
  background-size: cover;
  background-position: center;
`

const Container = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  padding: 32px 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 32px;
`

const BackButton = styled.button`
  background: none;
  border: none;
  color: #e66767;
  cursor: pointer;
  margin-bottom: 16px;
`

const dados = {
  italiana: {
    nome: 'La Dolce Vita Trattoria',
    imagem: pizzaImg,
    produtos: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      nome: 'Pizza Marguerita',
      descricao: 'Molho de tomate, mussarela e manjericão.',
      preco: 60.9
    }))
  },
  japonesa: {
    nome: 'Hioki Sushi',
    imagem: japonesaImg,
    produtos: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      nome: 'Combo Sushi',
      descricao: 'Sushis e sashimis frescos.',
      preco: 89.9
    }))
  },
  hamburguer: {
    nome: 'Burger House',
    imagem: hamburguerImg,
    produtos: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      nome: 'Hambúrguer Artesanal',
      descricao: 'Carne suculenta e pão brioche.',
      preco: 42.9
    }))
  },
  massas: {
    nome: 'Cantina da Nona',
    imagem: massasImg,
    produtos: Array.from({ length: 6 }).map((_, i) => ({
      id: i + 1,
      nome: 'Lasanha',
      descricao: 'Massa artesanal com molho bolonhesa.',
      preco: 55.9
    }))
  }
}

const Restaurante = () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const restaurante = dados[id as keyof typeof dados]
  if (!restaurante) return null

  return (
    <>
      {/* HEADER DO RESTAURANTE (COM CARRINHO) */}
      <HeaderRestaurant />
      <Cart />

      {/* BANNER */}
      <Banner bg={restaurante.imagem} />

      <Container>
        <BackButton onClick={() => navigate('/')}>
          ← Voltar
        </BackButton>

        <Grid>
          {restaurante.produtos.map(item => (
            <MenuCard
              key={item.id}
              id={item.id}
              titulo={item.nome}
              descricao={item.descricao}
              imagem={restaurante.imagem}
              preco={item.preco}
            />
          ))}
        </Grid>
      </Container>

      <Footer />
    </>
  )
}

export default Restaurante
