import styled from 'styled-components'

export const Card = styled.div`
  background-color: #ffebd9;
  border-radius: 8px;
  padding: 16px;
  width: 280px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
  }
`

export const Image = styled.img`
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
`

export const Title = styled.h3`
  margin: 12px 0 8px;
  color: #4b4b4b;
`

export const Description = styled.p`
  font-size: 14px;
  color: #4b4b4b;
`
