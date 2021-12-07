import { Currency } from "./components/Currency";
import { Raspberry } from "./components/Raspberry";
import { RoomSensors } from "./components/RoomSensors";
import { Weather } from "./components/Weather";

function App() {
  return (
    <div className="h-screen overflow-hidden flex  justify-center app items-center">
      <div className="w-full lg:px-60  justify-center container mx-auto">
        <div className="flex flex-wrap w-full lg:w-auto">
          <Weather />
          <RoomSensors />
        </div>
        <div className="flex flex-wrap w-full ">
          <Currency />
          <Raspberry />
        </div>
      </div>
    </div>
  );
}

export default App;
