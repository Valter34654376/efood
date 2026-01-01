import Header from '../../components/Header'
import Footer from '../../components/Footer'
import PizzaCard from '../../components/PizzaCard'
import styled from 'styled-components'

const Container = styled.main`
  padding: 32px;
  max-width: 1200px;
  margin: 0 auto;
`

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
  justify-content: center;
`

const pratos = [
  {
    titulo: 'Pizza Calabresa',
    descricao: 'Pizza artesanal com calabresa fatiada, cebola e queijo derretido.',
    imagem:
      'https://images.unsplash.com/photo-1594007654729-407eedc4be65?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Pizza Marguerita',
    descricao: 'Molho de tomate, mussarela fresca e manjericão.',
    imagem:
      'https://rossopizza.com.br/salao/wp-content/uploads/2019/09/istock-181175167.jpg'
  },
  {
    titulo: 'Hambúrguer Artesanal',
    descricao: 'Pão brioche, carne suculenta, queijo e molho especial.',
    imagem:
      'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=800&q=80'
  },
  {
    titulo: 'Lasanha à Bolonhesa',
    descricao: 'Massa com molho de tomate, carne moída e queijo gratinado.',
    imagem:
      'https://guiadacozinha.com.br/wp-content/uploads/2014/01/lasanha-bolonhesa-na-pressao.jpg'
  },
  {
    titulo: 'Frango Grelhado',
    descricao: 'Filé de frango grelhado com ervas e legumes.',
    imagem:
      'https://img.cybercook.com.br/imagens/receitas/340/file-de-frango-grelhado-2.jpeg'
  },
  {
    titulo: 'Sobremesa de Chocolate',
    descricao: 'Brownie com calda quente de chocolate.',
    imagem:
      'https://i.ytimg.com/vi/Hgayw2y9iNw/maxresdefault.jpg'
  }
]

const Home = () => {
  return (
    <>
      <Header />
      <Container>
        <Grid>
          {pratos.map((prato, index) => (
            <PizzaCard
              key={index}
              titulo={prato.titulo}
              descricao={prato.descricao}
              imagem={prato.imagem}
            />
          ))}
        </Grid>
      </Container>
      <Footer />
    </>
  )
}

export default Home
