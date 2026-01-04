import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PizzaCard from '../../components/PizzaCard'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

import japonesaImg from '../../assets/japonesa.png'
import italianaImg from '../../assets/pizza.png'
import hamburguerImg from '../../assets/hamburguer.png'
import massasImg from '../../assets/massas.png'

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

const restaurantes = [
  {
    id: 'japonesa',
    titulo: 'Hioki Sushi',
    descricao: 'Culinária japonesa no conforto da sua casa.',
    tipo: 'Japonesa',
    avaliacao: 4.9,
    destaque: true,
    imagem: japonesaImg
  },
  {
    id: 'italiana',
    titulo: 'La Dolce Vita Trattoria',
    descricao: 'Autêntica cozinha italiana.',
    tipo: 'Italiana',
    avaliacao: 4.6,
    imagem: italianaImg
  },
  {
    id: 'hamburguer',
    titulo: 'Burger House',
    descricao: 'Hambúrgueres artesanais.',
    tipo: 'Hamburgueria',
    avaliacao: 4.8,
    imagem: hamburguerImg
  },
  {
    id: 'massas',
    titulo: 'Cantina da Nona',
    descricao: 'Massas tradicionais italianas.',
    tipo: 'Massas',
    avaliacao: 4.7,
    imagem: massasImg
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          {restaurantes.map(item => (
            <Link
              key={item.id}
              to={`/restaurante/${item.id}`}
              style={{ textDecoration: 'none' }}
            >
              <PizzaCard
                titulo={item.titulo}
                descricao={item.descricao}
                imagem={item.imagem}
                tipo={item.tipo}
                avaliacao={item.avaliacao}
                destaque={item.destaque}
              />
            </Link>
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home
