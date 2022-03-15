import "node_modules/highlight.js/styles/a11y-dark.css";
import Highlight from "react-highlight";

export default function CodeBlock({ code, language }) {
  return (
    <div className='rounded-md shadow-md shadow-stone-800/30 overflow-hidden h-max text-left text-xs my-2 w-full'>
      <Highlight className={language}>{code}</Highlight>
    </div>
  );
}
