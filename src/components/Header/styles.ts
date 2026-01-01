import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  min-height: 260px;
  background: linear-gradient(135deg, #8b0000, #b22222);
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Content = styled.div`
  max-width: 1100px;
  padding: 24px;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.span`
  font-size: 3rem;
  margin-bottom: 12px;
`

export const Title = styled.h1`
  color: #fff8ee;
  font-size: clamp(1.8rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 10px;
`

export const Subtitle = styled.h2`
  color: #f5e6d3;
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 400;
`
