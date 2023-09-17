import React, { useEffect, useRef, useState } from "react";

const Demo2 = () => {
  const [y, setY] = useState(0);

  //persists within render cycle
  const z = useRef(0);
  let x = 0;

  const i = useRef(null);
  useEffect(() => {
    i.current = setInterval(() => {
      console.log("timemout", Math.random());
    }, 1000);

    return () => {
      clearInterval(i.current);
    };
  });
  return (
    <div className="m-4 p-2 bg-gray-50 border border-black w-96 h-96">
      <div>
        <button
          className="bg-green-700 text-white px-2 m-4"
          onClick={() => {
            x = x + 1;
            //cant update on UI
            console.log(x);
          }}
        >
          Increase x
        </button>
        <span className="font-bold text-xl">let x={x}</span>
      </div>

      <div>
        <button
          className="bg-green-700 text-white px-2 m-4"
          onClick={() => {
            setY(y + 1);
          }}
        >
          Increase y
        </button>
        <span className="font-bold text-xl">let y={y}</span>
      </div>

      <div>
        <button
          className="bg-green-700 text-white px-2 m-4"
          onClick={() => {
            // setY(y + 1);
            z.current += 1;
            console.log("ref", z.current);
          }}
        >
          Increase z
        </button>
        <span className="font-bold text-xl">ref z={z.current}</span>
      </div>

      <button
        className="bg-red-900 p-2 m-4 text-white font-bold rounded-lg"
        onClick={() => {
          clearInterval(i.current);
        }}
      >
        Stop Printing
      </button>
    </div>
  );
};

export default Demo2;
