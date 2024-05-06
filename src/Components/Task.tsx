import styles from "./Task.module.css";

import { PlusCircle } from "@phosphor-icons/react";

import {NoExistingTasks} from './NoExistingTasks'
import { TaskCard } from "./TaskCard";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";

interface Task {
  taskTitle: string,
    checked: boolean
}
export function Task() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskText, setNewTaskText] = useState("");


  function handleCreateNewTask(event: FormEvent,) {
    event.preventDefault();

    setTasks([...tasks, {taskTitle: newTaskText, checked: false}]);

    setNewTaskText("");
  }

  function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
    event.target.setCustomValidity("");
    setNewTaskText(event.target.value);
  }

  function handleNewTaskInvalid(event: InvalidEvent<HTMLInputElement>) {
    event.target.setCustomValidity("Esse campo é obrigatório!");
  }

  function HandleTheCheckButton(task: Task){
    setTasks(prevTasks => {
      const updatedTasks = prevTasks.map(prevTask => {
        if (prevTask === task) {
          return { ...prevTask, checked: !prevTask.checked };
        }
        return prevTask;
      });
      return updatedTasks;
    });
    }

  const listTaskEmpty = newTaskText.length === 0;
  const checkedTasksCount = tasks.filter(task => task.checked).length;
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
            Tarefas criadas <p>{tasks.length}</p>
          </strong>
          <strong className={styles.tasksCompleted}>
            Concluidas <p>{checkedTasksCount} de {tasks.length}</p>
          </strong>
        </header>

        {tasks.length > 0 ? tasks.map((task) => {
          return <TaskCard message={task.taskTitle} onPress={() => HandleTheCheckButton(task)} isChecked={task.checked}/>;
        }): <NoExistingTasks/> }
      </section>
    </div>
  );
}
