import { Button } from "@/components/Elements/Button";
import { useRef } from "react";

function App() {
  const nameInputRef: React.LegacyRef<HTMLInputElement> = useRef(null);

  const sayHello = async () => {
    const name = nameInputRef.current?.value;
    if (!name) {
      return;
    }
    await window.API.sayHello({ name });
  };

  const sayGoodBye = async () => {
    const name = nameInputRef.current?.value;
    if (!name) {
      return;
    }
    await window.API.sayGoodBye({
      name,
    });
  };
  return (
    <div className="h-screen">
      <div className="flex flex-col justify-center items-center h-full">
        <div className="mb-9">
          <input
            className="w-full mt-2 py-3 px-3 rounded-lg border border-gray-300 text-gray-400 focus:border-indigo-500 focus:outline-none"
            type="text"
            ref={nameInputRef}
          />
        </div>
        <div>
          <Button onClick={sayHello}>Hello</Button>
          <Button onClick={sayGoodBye}>Good Bye</Button>
        </div>
      </div>
    </div>
  );
}

export default App;
