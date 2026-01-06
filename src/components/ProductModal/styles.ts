import styled from 'styled-components'

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.8);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`

export const Container = styled.div`
  background-color: #e66767;
  width: 900px;
  max-width: 95%;
  display: flex;
  position: relative;
`

export const Image = styled.img`
  width: 280px;
  object-fit: cover;
`

export const Content = styled.div`
  padding: 32px;
  color: #fff;
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const Title = styled.h3`
  font-size: 24px;
`

export const Button = styled.button`
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 12px;
  font-size: 14px;
  cursor: pointer;
  width: fit-content;
`

export const Close = styled.button`
  position: absolute;
  top: 16px;
  right: 16px;
  background: none;
  border: none;
  color: #fff;
  font-size: 24px;
  cursor: pointer;
`