import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
`

export const Drawer = styled.aside`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 360px;
  background: #e66767;
  padding: 24px;
  overflow-y: auto;
`

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;

  h3 {
    color: #fff;
  }

  button {
    background: none;
    border: none;
    color: #fff;
    font-size: 20px;
    cursor: pointer;
  }
`

export const StepContent = styled.div`
  color: #fff;

  h4 {
    margin-bottom: 16px;
  }

  label {
    display: block;
    margin-bottom: 4px;
    font-size: 14px;
  }
`

export const Row = styled.div`
  display: flex;
  gap: 16px;
`

export const Input = styled.input`
  width: 100%;
  height: 32px;
  margin-bottom: 12px;
  padding: 0 8px;
  border: none;
  outline: none;
`

export const Button = styled.button<{ secondary?: boolean }>`
  width: 100%;
  height: 40px;
  margin-top: 8px;
  border: none;
  cursor: pointer;
  font-weight: bold;

  background: ${({ secondary }) => (secondary ? '#ffebd9' : '#fff')};
  color: #e66767;
`
