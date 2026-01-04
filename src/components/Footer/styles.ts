import styled from 'styled-components'

export const Container = styled.footer`
  background-color: #ffebd9;
  padding: 40px 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Logo = styled.img`
  margin-bottom: 32px;
  height: 55px;
`

export const Social = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 32px;

  img {
    width: 24px;
    height: 24px;
  }
`

export const Copy = styled.p`
  max-width: 480px;
  text-align: center;
  font-size: 10px;
  line-height: 16px;
  color: #e66767;
`
