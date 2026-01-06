
import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Button, StepContent } from '../styles'

const Success = () => {
  const { reset } = useContext(CartContext)

  return (
    <StepContent>
      <h4>Pedido realizado – #{Math.floor(Math.random() * 100000)}</h4>

      <p>
        Estamos felizes em informar que seu pedido já está em processo de
        preparação e, em breve, será entregue no endereço fornecido.
      </p>

      <p>
        Gostaríamos de ressaltar que nossos entregadores não estão autorizados
        a realizar cobranças extras.
      </p>

      <p>
        Lembre-se da importância de higienizar as mãos após o recebimento do
        pedido, garantindo assim sua segurança e bem-estar durante a refeição.
      </p>

      <p>
        Esperamos que desfrute de uma deliciosa e agradável experiência
        gastronômica. Bom apetite!
      </p>

      <Button onClick={reset}>
        Concluir
      </Button>
    </StepContent>
  )
}

export default Success
