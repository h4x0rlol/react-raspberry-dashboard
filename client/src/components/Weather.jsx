import React from "react";

export const Weather = () => {
  return (
    <div className="w-full lg:w-1/2 flex  bg-auto rounded-tl">
      <div className="rounded-tl pt-6 pl-8 pr-32 w-full bg-blue-400 opacity-90 text-white">
        <div className="flex flex-row justify-between">
          <div>
            <div className="mb-1 w-max">
              <h2 className="font-semibold text-3xl leading-none pb-2">
                Tuesday
              </h2>
              <h3 className="pb-2">15 Dec 2021</h3>
              <p className="flex aling-center pb-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 pr-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                Omsk, RU
              </p>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-12 w-12 ml-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                />
              </svg>
            </div>
          </div>

          <div>
            <div className="mb-10 ml-28 w-max">
              <h2 className=" font-semibold text-3xl leading-none pb-1">
                Scattered clouds
              </h2>
              <h3 className="font font-medium">Temp: +29 ºC</h3>
              <h3 className="">Feels like: +29 ºC</h3>
              <h3 className="">Humidity: 70 %</h3>
              <h3 className="">Pressure: 1032</h3>
              <h3 className="">Wind speed: 3.13</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
