import { useEffect, useState } from 'react'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PizzaCard from '../../components/PizzaCard'
import styled from 'styled-components'

const Container = styled.main`
  max-width: 1100px;
  margin: 0 auto;
  padding: 40px 16px;
`

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`

type Restaurante = {
  id: number
  titulo: string
  descricao: string
  tipo: string
  avaliacao: number
  capa: string
  destacado: boolean
}

const Home = () => {
  const [restaurantes, setRestaurantes] = useState<Restaurante[]>([])

useEffect(() => {
  fetch('/api/efood/restaurantes')
    .then(res => res.json())
    .then(data => setRestaurantes(data))
}, [])
  return (
    <>
      <Header />
      <Container>
        <Grid>
          {restaurantes.map(item => (
            <PizzaCard
              key={item.id}
              id={item.id}
              titulo={item.titulo}
              descricao={item.descricao}
              imagem={item.capa}
              tipo={item.tipo}
              avaliacao={item.avaliacao}
              destaque={item.destacado}
            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home
