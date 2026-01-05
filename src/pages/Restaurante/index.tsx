import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import HeaderRestaurant from '../../components/HeaderRestaurant'
import Footer from '../../components/Footer'
import MenuCard from '../../components/MenuCard'
import Cart from '../../components/Cart'
import styled from 'styled-components'

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

const Restaurante = () => {
  const { id } = useParams()
  const navigate = useNavigate()
  const [restaurante, setRestaurante] = useState<any>(null)

  useEffect(() => {
    fetch(`https://api-ebac.vercel.app/api/efood/restaurantes/${id}`)
      .then(res => res.json())
      .then(data => setRestaurante(data))
  }, [id])

  if (!restaurante) return null

  return (
    <>
      <HeaderRestaurant />
      <Cart />

      <Banner bg={restaurante.capa} />

      <Container>
        <BackButton onClick={() => navigate('/')}>
          ← Voltar
        </BackButton>

        <Grid>
          {restaurante.cardapio.map((item: any) => (
            <MenuCard
              key={item.id}
              id={item.id}
              titulo={item.nome}
              descricao={item.descricao}
              imagem={item.foto}
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
