
import Highlight from "react-highlight";
import styles from "@/styles/CodeBlock.module.css";
import "node_modules/highlight.js/styles/a11y-dark.css";

export default function CodeBlock({ code, language }) {
  return (
    <div className={styles.codeBlock}>
      <Highlight className={language}>{code}</Highlight>
    </div>
  );
}
