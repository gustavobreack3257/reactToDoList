import clipBoard from "../assets/Clipboard.svg";

import styles from "./NoExistingTasks.module.css";

export function NoExistingTasks() {
  return (
    <aside className={styles.NoTask}>
      <img src={clipBoard} alt="Imagem de aviso, falta preenchimento" />

      <strong>
        Você ainda não tem tarefas cadastradas
        <p>Crie tarefas e organize seus itens a fazer</p>
      </strong>
    </aside>
  );
}
