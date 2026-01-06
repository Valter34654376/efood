import { createContext, useState } from 'react'
import type { PropsWithChildren } from 'react'

type CartItem = {
  id: number
  titulo: string
  preco: number
  imagem: string
}

type CartStep = 'cart' | 'delivery' | 'payment' | 'success'

type CartContextType = {
  isOpen: boolean
  items: CartItem[]
  step: CartStep
  openCart: () => void
  closeCart: () => void
  addItem: (item: CartItem) => void
  removeItem: (id: number) => void
  nextStep: () => void
  prevStep: () => void
  reset: () => void
}

export const CartContext = createContext({} as CartContextType)

export const CartProvider = ({ children }: PropsWithChildren) => {
  const [isOpen, setIsOpen] = useState(false)
  const [items, setItems] = useState<CartItem[]>([])
  const [step, setStep] = useState<CartStep>('cart')

  const openCart = () => setIsOpen(true)
  const closeCart = () => setIsOpen(false)

  const addItem = (item: CartItem) => {
    setItems(prev => [...prev, item])
    setIsOpen(true)
  }

  const removeItem = (id: number) => {
    setItems(prev => prev.filter(item => item.id !== id))
  }

  const nextStep = () => {
    setStep(prev =>
      prev === 'cart'
        ? 'delivery'
        : prev === 'delivery'
        ? 'payment'
        : 'success'
    )
  }

  const prevStep = () => {
    setStep(prev =>
      prev === 'payment'
        ? 'delivery'
        : prev === 'delivery'
        ? 'cart'
        : prev
    )
  }

  const reset = () => {
    setItems([])
    setStep('cart')
    setIsOpen(false)
  }

  return (
    <CartContext.Provider
      value={{
        isOpen,
        items,
        step,
        openCart,
        closeCart,
        addItem,
        removeItem,
        nextStep,
        prevStep,
        reset
      }}
    >
      {children}
    </CartContext.Provider>
  )
}