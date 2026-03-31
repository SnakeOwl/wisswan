import ButtonStyled from '@/app/_components/buttons/ButtonStyled'
import clearCache from '../_actions/clearCache';

export default function CacheClearButton() {
    return (
        <ButtonStyled
            onClick={clearCache}
            className='px-2 py-1'
            theme='red-reversed'
        >

            Очистить кеш
        </ButtonStyled>
    )

}
