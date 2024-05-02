import styles from './App.module.css'

import "./Global.css"

import { Header } from "./Components/Header";
import { Task} from "./Components/Task";

export function App() {
  return (
    <div>
      <Header/>

      <main className={styles.wrapper}>
        <Task/>
      </main>
    </div>
  );
}
