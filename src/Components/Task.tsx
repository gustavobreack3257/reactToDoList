import styles from "./Task.module.css";

import { PlusCircle } from "@phosphor-icons/react";
export function Task() {
  return (
    <div>
      <form className={styles.newTaskInputStyles}>
        <input type="text" placeholder="Adicione uma nova tarefa" />

        <button className={styles.newTaskButtonStyles}>
          <strong>Criar</strong>
          <PlusCircle />
        </button>
      </form>

      <section  className={styles.taskCounter}>
        <header >
          <strong className={styles.tasksCreated}>
            Tarefas criadas <p>0</p>
          </strong>
          <strong className={styles.tasksCompleted}>
            Concluidas <p>0</p>
          </strong>
        </header>
      </section>
    </div>
  );
}
