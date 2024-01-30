import React, { MouseEventHandler } from 'react'
import * as Styled from './listcard.styled'
import ListIcnLeft from '@/img/ListICNLeft'

interface ListCardProps {
  color: string
  name: string
  date: string
  message: string
  messageId: string
  onClick?: MouseEventHandler<HTMLDivElement>
}

function ListCard({ color, name, date, message, onClick }: ListCardProps) {
  return (
    <Styled.SList onClick={onClick}>
      <Styled.ListWrapper color={color}>
        <Styled.ListTitle>{name}</Styled.ListTitle>
        <Styled.ListDate>{date}</Styled.ListDate>
        <Styled.ListText>{message}</Styled.ListText>
      </Styled.ListWrapper>
      <Styled.ListIcnLeft>
        <ListIcnLeft color={color} />
      </Styled.ListIcnLeft>
      <Styled.ListIcnRight>
        <ListIcnLeft color={color} />
      </Styled.ListIcnRight>
    </Styled.SList>
  )
}

export default ListCard
