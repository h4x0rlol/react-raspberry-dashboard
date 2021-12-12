export const RoomSensors = ({ requestTime, sensorsData }) => {
  return (
    <div className="w-full 2xl:w-1/2 flex rounded-tr bg-auto">
      <div
        className="rounded-tr py-6 w-full text-white opacity-95 flex flex-col items-center"
        style={{ backgroundColor: "#2c3e50" }}
      >
        <h2 className="flex flex-row font-semibold text-center text-3xl leading-none pb-5">
          {requestTime}
        </h2>

        <h2 className="flex flex-row font-semibold text-center text-2xl leading-none pb-5">
          Temperature: {sensorsData?.temp}
          <svg
            className="h-7 w-7 ml-1"
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
            <circle cx="6" cy="8" r="2" />
            <path d="M20 9a3 3 0 0 0 -3 -3h-1a3 3 0 0 0 -3 3v6a3 3 0 0 0 3 3h1a3 3 0 0 0 3 -3" />
          </svg>
        </h2>

        <h2 className="flex flex-row font-semibold text-center text-2xl leading-none">
          Humidity: {sensorsData?.humidity}
          <svg
            className="h-7 w-7 ml-1"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="19" y1="5" x2="5" y2="19" />
            <circle cx="6.5" cy="6.5" r="2.5" />
            <circle cx="17.5" cy="17.5" r="2.5" />
          </svg>
        </h2>
      </div>
    </div>
  );
};
