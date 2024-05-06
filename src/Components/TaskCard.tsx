import styles from "./TaskCard.module.css";

import { Trash, CheckFat } from "@phosphor-icons/react";

interface TaskProps {
  message: string;
  isChecked?: boolean;
  onDeleteTask: (comment: string) => void;
  onPress?: () => void;
}
export function TaskCard({
  message,
  isChecked = false,
  onPress,
  onDeleteTask,
}: TaskProps) {
  function handleDeleteTask() {
    onDeleteTask(message);
  }
  return (
    <article className={styles.task}>
      <button
        onClick={onPress}
        className={styles.taskRadius}
        style={{
          backgroundColor: isChecked ? "#5E60CE" : "transparent",
          textDecorationLine: isChecked ? "line-through" : "none",
        }}
      >
        {isChecked ? (
          <CheckFat style={{ color: "#F2F2F2", height: 5, width: 6 }} />
        ) : null}
      </button>

      <p>{message}</p>

      <div onClick={handleDeleteTask} className={styles.deleteTaskbutton}>
        <Trash size={20} />
      </div>
    </article>
  );
}
