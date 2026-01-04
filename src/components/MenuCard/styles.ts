import styled from 'styled-components'

export const Card = styled.div`
  background-color: #e66767;
  border-radius: 8px;
  padding: 8px;
  color: #fff;
  display: flex;
  flex-direction: column;
`

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 4px;
`

export const Content = styled.div`
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const Title = styled.h4`
  font-size: 16px;
  font-weight: bold;
`

export const Description = styled.p`
  font-size: 14px;
  line-height: 20px;
`

export const Button = styled.button`
  margin-top: auto;
  background-color: #ffebd9;
  color: #e66767;
  border: none;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;
  border-radius: 4px;

  &:hover {
    opacity: 0.9;
  }
`
