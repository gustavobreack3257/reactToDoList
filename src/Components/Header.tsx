import style from './Header.module.css'

import HeaderLog from '../assets/Logo.svg'
export function Header(){
    return(
        <header className={style.headerStyle}>
            <img src={HeaderLog} alt="Logo tipo do projeto" />
        </header>
    )
}