import styles from "./Task.module.css";

import { PlusCircle } from "@phosphor-icons/react";

import {NoExistingTasks} from './NoExistingTasks'
import { TaskCard } from "./TaskCard";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
export function Task() {
  const [tasks, setTasks] = useState(['Fazer caminhada na praça']);
  const [newTaskText, setNewTaskText] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();

    setTasks([...tasks, newTaskText]);
    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function HandleTheCheckButton(){
    setIsChecked(isChecked => !isChecked)
  }

  const listTaskEmpty = newTaskText.length === 0;

  return (
    <div>
      <form
        onSubmit={handleCreateNewTask}
        className={styles.newTaskInputStyles}
      >
        <input
          type="text"
          placeholder="Adicione uma nova tarefa"
          value={newTaskText}
          onChange={handleNewTaskChange}
          onInvalid={handleNewTaskInvalid}
          required
        />

        <button type="submit" disabled={listTaskEmpty} className={styles.newTaskButtonStyles}>
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

        {tasks.length > 0 ? tasks.map((task) => {
          return <TaskCard message={task} onPress={HandleTheCheckButton} isChecked={isChecked}/>;
        }): <NoExistingTasks/> }
      </section>
    </div>
  );
}
