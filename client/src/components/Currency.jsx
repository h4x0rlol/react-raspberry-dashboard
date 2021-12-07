import React from "react";

export const Currency = () => {
  return (
    <div className="w-full 2xl:w-1/2 flex bg-auto rounded-bl">
      <div
        className="rounded-bl py-6 pl-8 pr-32 w-full text-white"
        style={{ backgroundColor: "#7f8c8d" }}
      >
        <div className="flex flex-row justify-between">
          <div>
            <div className="mb-1 w-max">
              <h2 className="font-semibold text-3xl leading-none pb-5">
                Cryptocurrency:
              </h2>
              <h2 className="font-semibold text-3xl leading-none pb-5">
                Price:
              </h2>
              <h2 className="font-semibold text-3xl leading-none pb-5">24h:</h2>
            </div>
          </div>

          <div>
            <div className="lg:w-max">
              <h2 className="font-semibold text-3xl leading-none pb-5">BNB</h2>

              <h2 className="flex flex-row font-semibold text-3xl leading-none pb-5">
                580.42
                <svg
                  className="h-8 w-8 ml-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </h2>

              <h2 className="flex flex-row font-semibold text-3xl leading-none ">
                3.86 %
                <svg
                  className="h-8 w-8 ml-1"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path stroke="none" d="M0 0h24v24H0z" />
                  <line x1="12" y1="5" x2="12" y2="19" />
                  <line x1="18" y1="11" x2="12" y2="5" />
                  <line x1="6" y1="11" x2="12" y2="5" />
                </svg>
                {/* <svg
                className="h-8 w-8 ml-1"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path stroke="none" d="M0 0h24v24H0z" />{" "}
                <line x1="12" y1="5" x2="12" y2="19" />{" "}
                <line x1="18" y1="13" x2="12" y2="19" />{" "}
                <line x1="6" y1="13" x2="12" y2="19" />
              </svg> */}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
