import { useState } from 'react'
import { Button } from '../../components/Button'
import { Input } from '../../components/Input'
import { Wrapper } from '../../components/Wrapper'
import { Loader } from '../../components/loader'
import * as S from './slyled'

import { api } from '../../api'

export const Home = () => {
    const [shortUrl, setShortUrl] = useState('')
    const [originURL, setOriginURL] = useState('')
    const [loading, setLoading] = useState(false)

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setOriginURL(e.currentTarget.value)
      }
    
    const handleShorten = async () => {
        if(!originURL) return;

        setShortUrl("")
        setLoading(true);
        const {data} = await api.post('shorten', { originURL })
        console.log(data.shortURL)
        setShortUrl(data.shortURL)
        setOriginURL("")
        setLoading(false);
    }
    
    const handleCopy = async () => {        
        navigator.clipboard.writeText(shortUrl)
    }

    return <S.Home>
        <Wrapper>
            <Input onChange={handleChange} placeholder="Digite aqui sua url"/>
            <Button name="Encurtar" handleClick={handleShorten}/>
        </Wrapper>
        
        <Loader loading={loading} />
        
        {shortUrl 
            && 
        <Wrapper>
            <Input value={shortUrl} readOnly={true}/>
            <Button name="Copiar" handleClick={handleCopy}/>
        </Wrapper>}
        
    </S.Home>
}