import styled from 'styled-components'

export const Container = styled.header`
  background-color: #fff5eb;
  height: 186px;
  border-bottom: 1px solid #000;
`

export const Content = styled.div`
  position: relative; /* 🔑 ESSENCIAL */
  max-width: 1100px;
  height: 100%;
  margin: 0 auto;
  padding: 0 16px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Logo = styled.div`
  position: absolute; /* 🔑 ESSENCIAL */
  left: 50%;
  transform: translateX(-50%);

  img {
    height: 57px;
    display: block;
  }
`

export const Left = styled.span`
  color: #e66767;
  font-weight: bold;
`

export const CartButton = styled.button`
  background: none;
  border: none;
  color: #e66767;
  font-weight: bold;
  cursor: pointer;
`
