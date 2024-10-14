import React from "react";

function Temperature({ setCity, stats }) {
  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  return (
    <div className="shadow-2xl p-4 w-full max-w-md mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <input
          type="text"
          className="bg-slate-600 border-slate-500 rounded-lg text-slate-200 placeholder-slate-400 w-full md:w-60 h-10 p-2"
          placeholder="Enter your City Name"
          onChange={handleCityChange}
          defaultValue="New Delhi"
        />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="white"
              className="w-6 h-6 transition-transform duration-300 ease-in-out cursor-pointer hover:scale-110"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
              />
            </svg>
  
      </div>

      <div className="flex justify-center mt-8">
        {stats.isDay !== 0 ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-yellow-300 transition-transform duration-300 cursor-pointer hover:scale-110"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 3v2.25M6.364 5.636l1.591 1.591M21 12h-2.25M17.364 18.364l1.591-1.591M12 18.75V21M5.636 17.364L4.045 18.955M3 12H5.25M5.636 6.636L4.045 8.227"
            />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-14 h-14 text-slate-200 transition-transform duration-300 cursor-pointer hover:scale-110"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.752 15.002a9.72 9.72 0 0 1-3.752.748c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 0 0 3 11.25c0 5.385 4.365 9.75 9.75 9.75 1.33 0 2.597-.266 3.752-.748a9.753 9.753 0 0 0 5.998-9.002Z"
            />
          </svg>
        )}
      </div>

      <div className="flex justify-center items-center text-slate-200 mt-8">
        <p className="text-5xl font-semibold">{stats.temp}</p>
        <span className="text-3xl">°C</span>
      </div>

      <div className="text-center text-slate-300 mt-4 text-xl">{stats.condition}</div>
      <div className="text-center text-slate-400 mt-2 text-sm">
        Today • {stats.time} | {stats.location}
      </div>
    </div>
  );
}

export default Temperature;
