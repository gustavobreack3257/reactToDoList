import styles from "./Task.module.css";

import { PlusCircle } from "@phosphor-icons/react";

import { TaskCard } from "./TaskCard";
import { ChangeEvent, FormEvent, useState } from "react";
export function Task() {
  const [tasks, setTasks] = useState(["Fazer caminhada na praça"]);

  const [newTaskText, setNewTaskText] = useState("");

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  return (
    <div>
      <form
        onSubmit={handleCreateNewTask}
        className={styles.newTaskInputStyles}
      >
        <input type="text"
        placeholder="Adicione uma nova tarefa"
        value={newTaskText}
        onChange={handleNewTaskChange} />

        <button className={styles.newTaskButtonStyles}>
          <strong>Criar</strong>
          <PlusCircle />
        </button>
      </form>

      <section className={styles.taskCounter}>
        <header>
          <strong className={styles.tasksCreated}>
            Tarefas criadas <p>0</p>
          </strong>
          <strong className={styles.tasksCompleted}>
            Concluidas <p>0</p>
          </strong>
        </header>

        {tasks.map((task) => {
          return <TaskCard message={task} />;
        })}
      </section>
    </div>
  );
}
