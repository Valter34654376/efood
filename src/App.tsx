import AppRoutes from './routes'
import { CartProvider } from './context/CartContext'
import { GlobalStyle } from './styles/GlobalStyle'


function App() {
  return (
    <CartProvider>
      <GlobalStyle />
      <AppRoutes />
    </CartProvider>
  )
}

export default App
