import { useContext, useState } from 'react'
import { CartContext } from '../../context/CartContext'
import ProductModal from '../ProductModal'
import { Card, Image, Content, Title, Description, Button } from './styles'

type Props = {
  id: number
  titulo: string
  descricao: string
  imagem: string
  preco: number
}

const MenuCard = ({ id, titulo, descricao, imagem, preco }: Props) => {
  const [open, setOpen] = useState(false)
  const { addItem } = useContext(CartContext)

  return (
    <>
      <Card>
        <Image src={imagem} alt={titulo} />
        <Content>
          <Title>{titulo}</Title>
          <Description>{descricao}</Description>

          <Button onClick={() => setOpen(true)}>Ver mais</Button>
        </Content>
      </Card>

      {open && (
        <ProductModal
          titulo={titulo}
          descricao={descricao}
          imagem={imagem}
          preco={preco}
          onClose={() => setOpen(false)}
          onAdd={() => {
            addItem({ id, titulo, preco, imagem })
            setOpen(false)
          }}
        />
      )}
    </>
  )
}

export default MenuCard
