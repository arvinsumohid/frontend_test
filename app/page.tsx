import styles from "./page.module.css";

import Gallery from "./gallery";
import axios from "axios";

export default async function Home() {
  let users = [];
  const response = await fetch("https://jsonplaceholder.typicode.com/users");

  if (response.ok) {
    users = await response.json();
  }
  
  return (
    <main className={styles.main}>
      <Gallery users={users} />
    </main>
  );
}
