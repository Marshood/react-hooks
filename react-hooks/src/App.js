import "./App.css";
import UseStateApp from "./components/UseStateApp";
import UseEffectApp from "./components/UseEffectApp";
import UseRefApp from "./components/UseRefApp";
import UseMemoApp from "./components/UseMemoApp";
import UseCallback from "./components/UseCallback";
function App() {
  return (
    <div className="App">
      {/* <UseStateApp /> */}
      {/* <UseEffectApp></UseEffectApp> */}
      {/* <UseRefApp/> */}
      <UseMemoApp />
      {/* <UseCallback/> */}

    </div>
  );
}

export default App;
