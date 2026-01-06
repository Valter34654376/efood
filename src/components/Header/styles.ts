import styled from 'styled-components'
import pattern from '../../assets/pattern.png'

export const Container = styled.header`
  background-color: #fff5eb;
  background-image: url(${pattern});
  background-repeat: repeat;
  padding: 40px 0;
`

export const Content = styled.div`
  max-width: 1100px;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  img {
    height: 57px;
    margin-bottom: 24px;
  }
`

export const Title = styled.h1`
  color: #e66767;
  font-size: 32px;
  font-weight: bold;
  margin-bottom: 8px;
`

export const Subtitle = styled.p`
  color: #e66767;
  font-size: 30px;
  font-weight: bold;
`
