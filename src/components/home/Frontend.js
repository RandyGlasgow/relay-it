import { unstable_batchedUpdates } from "react-dom";
import { useEffect, useState, useCallback, Fragment } from "react";
import axios from "axios";
import CodeBlock from "@/components/CodeBlock";
import styles from "@/styles/Frontend.module.css";
import { FaChevronDown, FaChevronUp, FaDove } from "react-icons/fa";
import { Listbox, Transition } from "@headlessui/react";

const javascriptCode = `// react
const LoadingExample = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get('https://relay-it.dev/api/\$\{statusCode\}/your-endpoint')
      .then(res => { setData(res.data) })
      .catch(err => { setError(err.response.data.message) })
      .finally(() => { setIsLoading(false) });
  }, []);

  return (
    <div>
      {isLoading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {data && <p>{data.message}</p>}
    </div>
  )
`;



export default function Frontend() {
  return (
    <div className={styles.gridContainer}>
      <div></div>
      <CodeBlock code={javascriptCode} language='javascript' />
    </div>
  );
}
