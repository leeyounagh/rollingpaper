import * as Styled from './alert.styled'
import AlertIcn from '@/img/AlertIcn'

interface AlertProps {
  number: number
}

// toastify 커스텀하기
function Alert({ number }: AlertProps) {
  return (
    <Styled.Alert>
      <Styled.AlertWrapper>
        <Styled.AlertIcon>
          <AlertIcn />
        </Styled.AlertIcon>
        <Styled.AlertTextWrapper>
          <Styled.AlertTitle>{number}개의 덕담이 도착했어요</Styled.AlertTitle>
          <Styled.AlertText>지금 당장 확인하러가기</Styled.AlertText>
        </Styled.AlertTextWrapper>
      </Styled.AlertWrapper>
    </Styled.Alert>
  )
}

export default Alert
