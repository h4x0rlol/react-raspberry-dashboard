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
              {/* 
              <svg
                className="h-12 w-12 pb-2 ml-6"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                stroke-width="2"
                stroke="currentColor"
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <path d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72" />
                <path
                  d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
                  transform="rotate(60 12 12)"
                />
                <path
                  d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
                  transform="rotate(120 12 12)"
                />
                <path
                  d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
                  transform="rotate(180 12 12)"
                />
                <path
                  d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
                  transform="rotate(240 12 12)"
                />
                <path
                  d="M10 4l2 1l2 -1m-2 -2v6.5l3 1.72"
                  transform="rotate(300 12 12)"
                />
              </svg> */}

              <svg
                class="h-12 w-12 pb-2 ml-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <circle cx="12" cy="12" r="5" />{" "}
                <line x1="12" y1="1" x2="12" y2="3" />{" "}
                <line x1="12" y1="21" x2="12" y2="23" />{" "}
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
                <line x1="1" y1="12" x2="3" y2="12" />{" "}
                <line x1="21" y1="12" x2="23" y2="12" />{" "}
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
              </svg>
            </div>
          </div>

          <div>
            <div className="mb-6 ml-28 lg:w-max">
              <h2 className="font-semibold text-3xl leading-none pb-1">
                Scattered clouds
              </h2>
              <h3 className="font-medium">Temp: +29 ºC</h3>
              <h3>Feels like: +29 ºC</h3>
              <h3>Humidity: 70 %</h3>
              <h3>Pressure: 1032</h3>
              <h3>Wind speed: 3.13</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};