import { ReactNode } from 'react'
import * as S from './styled'

type Props = {
    children: ReactNode
}

export const Wrapper = ({children}: Props) => {
    return <S.Wrapper>{children}</S.Wrapper>
}