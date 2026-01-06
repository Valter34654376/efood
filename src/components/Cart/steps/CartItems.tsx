import { useContext, useState } from 'react'
import { CartContext } from '../../../context/CartContext'
import { Button, StepContent, Row, Input } from '../styles'

const Delivery = () => {
  const { nextStep, prevStep } = useContext(CartContext)

  const [form, setForm] = useState({
    receiver: '',
    address: '',
    city: '',
    cep: '',
    number: '',
    complement: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setForm(prev => ({ ...prev, [name]: value }))
  }

  return (
    <StepContent>
      <h4>Entrega</h4>

      <label>Quem irá receber</label>
      <Input name="receiver" value={form.receiver} onChange={handleChange} />

      <label>Endereço</label>
      <Input name="address" value={form.address} onChange={handleChange} />

      <label>Cidade</label>
      <Input name="city" value={form.city} onChange={handleChange} />

      <Row>
        <div>
          <label>CEP</label>
          <Input name="cep" value={form.cep} onChange={handleChange} />
        </div>

        <div>
          <label>Número</label>
          <Input name="number" value={form.number} onChange={handleChange} />
        </div>
      </Row>

      <label>Complemento (opcional)</label>
      <Input
        name="complement"
        value={form.complement}
        onChange={handleChange}
      />

      <Button onClick={nextStep}>
        Continuar com o pagamento
      </Button>

      <Button secondary onClick={prevStep}>
        Voltar para o carrinho
      </Button>
    </StepContent>
  )
}

export default Delivery