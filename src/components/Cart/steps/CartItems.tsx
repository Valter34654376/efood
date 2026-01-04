import { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Button } from '../styles'

const CartItems = () => {
  const { items, removeItem, nextStep } = useContext(CartContext)

  const total = items.reduce((acc, i) => acc + i.preco, 0)

  return (
    <>
      {items.map(item => (
        <div key={item.id}>
          <strong>{item.titulo}</strong> – R$ {item.preco.toFixed(2)}
          <button onClick={() => removeItem(item.id)}>🗑</button>
        </div>
      ))}

      <p>Total: R$ {total.toFixed(2)}</p>
      <Button onClick={nextStep}>Continuar com a entrega</Button>
    </>
  )
}

export default CartItems
