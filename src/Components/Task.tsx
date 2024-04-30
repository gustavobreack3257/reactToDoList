import styles from './Task.module.css'

import {PlusCircle} from '@phosphor-icons/react'
export function Task(){
    return(
            <form className={styles.newTaskInputStyles}>
            <input type="text" placeholder='Adicione uma nova tarefa'/>

            <button className={styles.newTaskButtonStyles}>
                <strong>Criar</strong>
                <PlusCircle/>
            </button>
            </form>

    )
}