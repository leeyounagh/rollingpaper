import styled from 'styled-components'

export const SLayout = styled.section<{ showCoachMark: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: 9vh;
  padding: 0 28px;
  z-index: ${({ showCoachMark }) => (showCoachMark ? 100001 : 100)};
`
