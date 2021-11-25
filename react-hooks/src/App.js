import "./App.css";
import UseStateApp from "./components/UseStateApp";
import UseEffectApp from "./components/UseEffectApp";
import UseRefApp from "./components/UseRefApp";

function App() {
  return (
    <div className="App">
      {/* <UseStateApp /> */}
      {/* <UseEffectApp></UseEffectApp> */}
      <UseRefApp/>
    </div>
  );
}

export default App;
