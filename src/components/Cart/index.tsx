
import { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Overlay, Drawer, Header } from './styles'

import CartItems from './steps/CartItems'
import Delivery from './steps/Delivery'
import Payment from './steps/Payment'
import Success from './steps/Success'

const Cart = () => {
  const { isOpen, closeCart, step } = useContext(CartContext)

  if (!isOpen) return null

  return (
    <Overlay onClick={closeCart}>
      <Drawer onClick={e => e.stopPropagation()}>
        <Header>
          <h3>Carrinho</h3>
          <button onClick={closeCart}>×</button>
        </Header>

        {step === 'cart' && <CartItems />}
        {step === 'delivery' && <Delivery />}
        {step === 'payment' && <Payment />}
        {step === 'success' && <Success />}
      </Drawer>
    </Overlay>
  )
}

export default Cart
