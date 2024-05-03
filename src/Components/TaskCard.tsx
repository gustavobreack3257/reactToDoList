import styles from './TaskCard.module.css'

import { Trash } from '@phosphor-icons/react'

interface TaskProps {
    message: string
}
export function TaskCard({message}: TaskProps){
    return(
        <article className={styles.task}>
            <button className={styles.taskRadius}>

            </button>

            <p>{message}</p>

            <div >
                <Trash size={20}/>
            </div>
        </article>
    )
}