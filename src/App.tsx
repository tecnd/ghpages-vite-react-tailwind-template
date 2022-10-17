import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img
            src={import.meta.env.BASE_URL + "vite.svg"}
            className="inline h-36 p-6 hover:drop-shadow-vite"
            alt="Vite logo"
          />
        </a>
        <a href="https://reactjs.org" target="_blank" rel="noreferrer">
          <img
            src={reactLogo}
            className="inline h-36 animate-react-spin p-6 hover:drop-shadow-react"
            alt="React logo"
          />
        </a>
      </div>
      <h1 className="my-9 text-6xl font-bold">Vite + React</h1>
      <div className="p-8">
        <button
          className="rounded-lg border border-solid border-transparent bg-neutral-400 py-2 px-5 text-base font-medium transition-colors hover:border-indigo-500 dark:bg-neutral-900"
          onClick={() => setCount((count) => count + 1)}
        >
          count is {count}
        </button>
        <p className="my-4">
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-neutral-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
}

export default App;
