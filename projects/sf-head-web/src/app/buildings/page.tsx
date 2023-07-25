"use client";

import { useState } from "react";

export default function Buildings() {
  const [name, setName] = useState<string>("");

  const onSubmit = async () => {
    try {
      const response = await fetch("/api/buildings", {
        method: "POST",
        body: JSON.stringify({ name }),
      });

      const stuff = await response.json();
      if (response.status === 200) {
        console.log(`got this successful response: ${JSON.stringify(stuff)}`);
      } else {
        console.log(`NON 200!?: ${JSON.stringify(stuff)}`);
      }
    } catch (e) {
      console.log(`ERROR!? ${e}`);
    }
  };

  return (
    <div>
      <h1 className="text-center">Create a new building</h1>
      <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Name
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              placeholder="New Building Name"
              value={name}
              onChange={(e) =>
                setName((old) => {
                  return old + e.target.value;
                })
              }
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={onSubmit}
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
