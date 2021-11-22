import { MouseEventHandler } from 'react'
import * as S from './styled'

type Props = {
    name: String,
    handleClick: MouseEventHandler
}

export  const Button = ({name, handleClick}: Props) => {
    return (<S.Button onClick={handleClick} >{name}</S.Button>)
}