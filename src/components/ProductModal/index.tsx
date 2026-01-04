import { Button, Close, Container, Content, Image, Overlay, Title } from './styles'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  preco: number
  onClose: () => void
  onAdd: () => void
}

const ProductModal = ({
  titulo,
  descricao,
  imagem,
  preco,
  onClose,
  onAdd
}: Props) => {
  return (
    <Overlay>
      <Container>
        <Close onClick={onClose}>×</Close>

        <Image src={imagem} alt={titulo} />

        <Content>
          <Title>{titulo}</Title>
          <p>{descricao}</p>

          <Button onClick={onAdd}>
            Adicionar ao carrinho – R$ {preco.toFixed(2)}
          </Button>
        </Content>
      </Container>
    </Overlay>
  )
}

export default ProductModal
