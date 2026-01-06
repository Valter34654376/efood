import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Button, StepContent } from '../styles'

const Payment = () => {
  const { items, prevStep, nextStep } = useContext(CartContext)

  const total = items.reduce((acc, item) => acc + item.preco, 0)

  const [form, setForm] = useState({
    nome: '',
    numero: '',
    cvv: '',
    mes: '',
    ano: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = () => {
    // aqui depois pode validar / integrar API
    nextStep()
  }

  return (
    <StepContent>
      <h4>Pagamento – Valor a pagar R$ {total.toFixed(2)}</h4>

      <label>Nome no cartão</label>
      <input
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />

      <label>Número do cartão</label>
      <input
        name="numero"
        value={form.numero}
        onChange={handleChange}
      />

      <div style={{ display: 'flex', gap: '16px' }}>
        <div style={{ flex: 1 }}>
          <label>CVV</label>
          <input
            name="cvv"
            value={form.cvv}
            onChange={handleChange}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label>Mês</label>
          <input
            name="mes"
            value={form.mes}
            onChange={handleChange}
          />
        </div>

        <div style={{ flex: 1 }}>
          <label>Ano</label>
          <input
            name="ano"
            value={form.ano}
            onChange={handleChange}
          />
        </div>
      </div>

      <Button onClick={handleSubmit}>
        Finalizar pagamento
      </Button>

      <Button secondary onClick={prevStep}>
        Voltar para a edição de endereço
      </Button>
    </StepContent>
  )
}

export default Payment