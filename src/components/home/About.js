import styles from "@/styles/About.module.css";
import { useState } from "react";

export default function About() {
  const [response, setResponse] = useState(200);

  return (
    <section className={styles.container}>
      <h2 className={styles.header}>Developing code is hard.</h2>

      <blockquote className={styles.quote}>
        <p>
          Don&apos;t wast your time hard coding a response type. Instead, write
          code that makes sense in the context of your application. Use your
          endpoints, your data, and your logic and let us handle the{" "}
          <span className={styles.callout}>REST {response}</span>.
        </p>
      </blockquote>
      <blockquote></blockquote>
      <p></p>
    </section>
  );
}
