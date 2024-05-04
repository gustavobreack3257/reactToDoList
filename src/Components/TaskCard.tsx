import styles from './TaskCard.module.css'

import { Trash, CheckFat } from '@phosphor-icons/react'

interface TaskProps {
    message: string
    isChecked?: boolean
    onPress?: () => void
}
export function TaskCard({message, isChecked = false, onPress }: TaskProps){
    return(
        <article className={styles.task} >
            <button onClick={onPress} className={styles.taskRadius} style={{backgroundColor: isChecked ? '#5E60CE': 'transparent'}}>
                {isChecked ? <CheckFat style={{color: '#F2F2F2', height: 5, width: 6}}/>: null}
            </button>

            <p>{message}</p>

            <div >
                <Trash size={20}/>
            </div>
        </article>
    )
}