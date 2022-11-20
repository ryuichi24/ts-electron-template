import { Button } from "@/components/Elements/Button";

function App() {
  const sayHello = async () => {
    await window.API.sayHello({ name: "Ryuichi" });
  };

  const sayGoodBye = async () => {
    await window.API.sayGoodBye({
      name: "Nishi",
    });
  };
  return (
    <div className="h-screen">
      <Button onClick={sayHello}>Hello</Button>
      <Button onClick={sayGoodBye}>Good Bye</Button>
    </div>
  );
}

export default App;
