import React, { useMemo, useState } from "react";
import { findNthPrime } from "../utils/helpers";

const Demo = () => {
  const [text, setText] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  //   const prime = findNthPrime(parseInt(text, 10));
  const prime = useMemo(() => findNthPrime(parseInt(text, 10)), [text]);

  return (
    <div
      className={
        "p-2 m-4 w-96 h-96 border border-black " +
        (isDarkTheme && "bg-gray-900 text-white")
      }
    >
      <div>
        <button
          className="m-2 p-2 bg-green-400 rounded-lg"
          onClick={() => setIsDarkTheme(!isDarkTheme)}
        >
          Toggle
        </button>
      </div>
      <div>
        <input
          className="border border-black px-2 m-2"
          type="number"
          value={text}
          onChange={(e) => {
            setText(e.target.value);
          }}
        />
      </div>
      <div>
        <h1 className="mt-4 font-bold text-xl">nth Prime:{prime}</h1>
      </div>
    </div>
  );
};

export default Demo;
