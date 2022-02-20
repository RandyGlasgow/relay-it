import { Switch } from "@headlessui/react";
import { useCallback, useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import axios from "axios";
import styles from "@/styles/Frontend.module.css";
import { CREATED_201 } from "@/data/response";

// snippet description
const Snippet = () => {
  return (
    <div>
      <h3 className={styles.header}>Frontend, you have flexibility too.</h3>
      <p className={styles.about}>
        Relay-It helps you build your frontend in a way that makes sense. You
        request data, you get data, you render the data. Why waste time trying
        to hard code your response types only to delete it later?
      </p>
      <ul className={styles.list} id='support'>
        <li>Relay-It supports all HTTP methods</li>
        <li>Dynamic data responses</li>
        <li>Tuneable suspense times</li>
        <li>All from one convenient API</li>
      </ul>
      <p className={styles.caption}>
        Waste less time waiting for an API to be developed. Anticipate the API,
        the data, and the logic. Once you are ready to go live, change the
        domain.
      </p>
    </div>
  );
};

const SnippetOne = () => {
  const [data, setData] = useState(CREATED_201);
  const [toggle, setToggle] = useState(false);

  const getData = useCallback(() => {
    const url = document.location;
    if (!toggle) {
      axios
        .post(url + "/api/404")
        .then((res) => setData(res.data))
        .catch((err) => setData(err.response.data));
    } else {
      axios
        .post(url + "/api/200", { data: "custom" })
        .then((res) => setData(res.data))
        .catch((err) => setData(err.response.data));
    }
  }, [toggle]);

  const Toggle = () => {
    return (
      <Switch
        checked={toggle}
        onChange={setToggle}
        className={styles.toggleButton}
      >
        <span>Custom Data: {JSON.stringify(toggle)}</span>
      </Switch>
    );
  };

  return (
    <div>
      <div className={styles.controls}>
        <button className={styles.requestButton} onClick={() => getData()}>
          Request
        </button>
        <Toggle />
      </div>
      <CodeBlock code={JSON.stringify(data, null, 2)} language='json' />
    </div>
  );
};

const SnippetTwo = () => {
  const [data, setData] = useState(CREATED_201);
  const [toggle, setToggle] = useState(false);

  const getData = useCallback(() => {
    const url = document.location;
    if (!toggle) {
      axios
        .post(url + "/api/300")
        .then((res) => setData(res.data))
        .catch((err) => setData(err.response.data));
    } else {
      axios
        .post(url + "/api/delay/1000/200")
        .then((res) => setData(res.data))
        .catch((err) => setData(err.response.data));
    }
  }, [toggle]);

  const Toggle = () => {
    return (
      <Switch
        checked={toggle}
        onChange={setToggle}
        className={styles.toggleButton}
      >
        <span>Delay Response: {JSON.stringify(toggle)}</span>
      </Switch>
    );
  };

  return (
    <div className={styles.snippet}>
      <div className={styles.controls}>
        <button className={styles.requestButton} onClick={() => getData()}>
          Request
        </button>
        <Toggle />
      </div>
      <CodeBlock code={JSON.stringify(data, null, 2)} language='json' />
    </div>
  );
};

export default function Frontend() {
  return (
    <section className={styles.container}>
      <div className={styles.gridContainer}>
        <Snippet />
        <div className={styles.snippets}>
          <SnippetTwo />
          <SnippetOne />
        </div>
      </div>
    </section>
  );
}
