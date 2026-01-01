import { Card, Image, Title, Description } from './styles'

type Props = {
  titulo: string
  descricao: string
  imagem: string
}

const PizzaCard = ({ titulo, descricao, imagem }: Props) => {
  return (
    <Card>
      <Image src={imagem} alt={titulo} />
      <Title>{titulo}</Title>
      <Description>{descricao}</Description>
    </Card>
  )
}

export default PizzaCard
