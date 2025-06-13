import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="max-w-5xl mx-auto p-8 text-center">
      <div className="mb-8">
        <a href="https://vite.dev" target="_blank" className="inline-block">
          <img 
            src={viteLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#646cffaa]" 
            alt="Vite logo" 
          />
        </a>
        <a href="https://react.dev" target="_blank" className="inline-block">
          <img 
            src={reactLogo} 
            className="h-24 p-6 transition-all duration-300 hover:drop-shadow-[0_0_2em_#61dafbaa] motion-safe:animate-spin [animation-duration:20s]" 
            alt="React logo" 
          />
        </a>
      </div>
      <h1 className="text-5xl font-bold leading-tight mb-8">Vite + React</h1>
      <div className="p-8 mb-8">
        <button 
          onClick={() => setCount((count) => count + 1)}
          className="rounded-lg border border-transparent px-5 py-3 text-base font-medium bg-gray-800 cursor-pointer transition-colors hover:border-blue-500 focus:outline-none focus-visible:ring-4 focus-visible:ring-blue-300"
        >
          Count is {count}
        </button>
        <p className="mt-4">
          Edit <code className="bg-gray-100 dark:bg-gray-800 px-1 rounded">src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-gray-500">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  );
};

export default App;
