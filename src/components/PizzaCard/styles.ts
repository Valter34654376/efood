import styled from 'styled-components'

export const Card = styled.div`
  background-color: #fff;
  border: 1px solid #e66767;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
`

export const Price = styled.p`
  padding: 0 8px;
  font-size: 16px;
  font-weight: bold;
  color: #e66767;
`


export const ImageWrapper = styled.div`
  position: relative;
`

export const Image = styled.img`
  width: 100%;
  height: 170px;
  object-fit: cover;
`

export const Tags = styled.div`
  position: absolute;
  top: 16px;
  right: 16px;
  display: flex;
  gap: 8px;
`

export const Tag = styled.span`
  background-color: #e66767;
  color: #fff;
  font-size: 12px;
  font-weight: bold;
  padding: 4px 6px;
`

export const Infos = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
`

export const Title = styled.h3`
  color: #e66767;
  font-size: 18px;
  font-weight: bold;
`

export const Rating = styled.span`
  color: #e66767;
  font-size: 14px;
`

export const Description = styled.p`
  padding: 8px;
  font-size: 14px;
  line-height: 22px;
  color: #4b4b4b;
  flex-grow: 1;
`

export const Button = styled.button`
  margin: 8px;
  background-color: #e66767;
  color: #fff;
  border: none;
  padding: 8px;
  font-size: 14px;
  cursor: pointer;

  &:hover {
    opacity: 0.9;
  }
`
export const List = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 48px;
`
