import styles from './TaskCard.module.css'

import { Trash } from '@phosphor-icons/react'
export function TaskCard(){
    return(
        <article className={styles.task}>
            <div className={styles.taskRadius}>

            </div>

            <p>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>

            <div>
                <Trash size={24}/>
            </div>
        </article>
    )
}