import { CREATED_201 } from "@/data/response";
import { Switch } from "@headlessui/react";
import { useCallback, useState } from "react";
import CodeBlock from "@/components/CodeBlock";
import axios from "axios";

// snippet description
const Snippet = () => {
  return (
    <div>
      <h3 className='text-left text-xl text-gray-800 font-semibold mb-2'>
        Frontend, you have flexibility too.
      </h3>
      <p className='text-left text-gray-800 mb-4'>
        Relay-It helps you build your frontend in a way that makes sense. You
        request data, you get data, you render the data. Why waste time trying
        to hard code your response types only to delete it later?
      </p>
      <ul className='list-disc list-inside font-mono mt-2' id='support'>
        <li>Relay-It supports all HTTP methods</li>
        <li>Dynamic data responses</li>
        <li>Tuneable suspense times</li>
        <li>All from one convenient API</li>
      </ul>
      <p className='text-center text-xl text-gray-800 font-semibold mt-6 mb-6'>
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
        className='bg-blue-500 hover:bg-blue-600 text-white shadow-md font-bold py-1 px-2 rounded'
      >
        <span>Custom Data: {JSON.stringify(toggle)}</span>
      </Switch>
    );
  };

  return (
    <div>
      <div className='flex justify-between items-center my-2'>
        <button
          className='bg-lime-500 hover:bg-lime-700 text-white shadow-md font-bold py-1 px-2 rounded'
          onClick={() => getData()}
        >
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
        className='bg-blue-500 hover:bg-blue-600 text-white shadow-md font-bold py-1 px-2 rounded'
      >
        <span>Delay: {JSON.stringify(toggle)}</span>
      </Switch>
    );
  };

  return (
    <div className='flex flex-col justify-start gap-2 flex-shrink-0 flex-grow-0'>
      <div className='flex justify-between items-center my-2'>
        <button
          className='bg-lime-500 hover:bg-lime-700 text-white shadow-md font-bold py-1 px-2 rounded'
          onClick={() => getData()}
        >
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
    <section className='mx-auto max-w-5xl p-4'>
      <div className='flex flex-col md:flex-row gap-8'>
        <Snippet />
        <div className='flex flex-col md:w-1/2 justify-start gap-2 flex-shrink-0 flex-grow-0'>
          <SnippetTwo />
          <SnippetOne />
        </div>
      </div>
    </section>
  );
}
