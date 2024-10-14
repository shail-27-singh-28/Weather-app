import React from "react";

function Highlights({ stats }) {
  return (
    <div className="bg-slate-600 p-4 rounded-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
      <h2 className="text-md font-semibold">{stats.title}</h2>
      <div className="mt-2 text-center">
        <span className="text-4xl font-bold">{stats.value}</span>
        <span className="text-2xl"> {stats.unit}</span>
      </div>

      {stats.direction && (
        <div className="mt-4 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 12L3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L6 12Zm0 0h7.5"
            />
          </svg>
          <span className="ml-2">{stats.direction}</span>
        </div>
      )}

      {stats.title === "Humidity" && (
        <div className="w-full mt-4 bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-600 h-2 rounded-full"
            style={{ width: `${stats.value}%` }}
          ></div>
        </div>
      )}
    </div>
  );
}

export default Highlights;
