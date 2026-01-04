import { useNavigate } from 'react-router-dom'
import {
  Card,
  Image,
  ImageWrapper,
  Infos,
  Title,
  Description,
  Tag,
  Tags,
  Rating,
  Button
} from './styles'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  tipo: string
  avaliacao: number
  destaque?: boolean
}

const PizzaCard = ({
  titulo,
  descricao,
  imagem,
  tipo,
  avaliacao,
  destaque
}: Props) => {
  const navigate = useNavigate()

  return (
    <Card>
      <ImageWrapper>
        <Image src={imagem} alt={titulo} />

        <Tags>
          {destaque && <Tag>Destaque da semana</Tag>}
          <Tag>{tipo}</Tag>
        </Tags>
      </ImageWrapper>

      <Infos>
        <Title>{titulo}</Title>
        <Rating>{avaliacao} ⭐</Rating>
      </Infos>

      <Description>{descricao}</Description>

      <Button onClick={() => navigate('/restaurante/1')}>
        Saiba mais
      </Button>
    </Card>
  )
}

export default PizzaCard
