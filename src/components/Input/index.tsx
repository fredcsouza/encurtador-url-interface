import * as S from './styled'

type Props = {
    value?: string,
    placeholder?: string,
    readOnly?: boolean,
    onChange?: React.ChangeEventHandler<HTMLInputElement>
}

export const Input = (props: Props) => {
    return (<S.Input type="text" {...props} />)
}