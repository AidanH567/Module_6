import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "../components/PropsDisplayer";
import City from "../components/City";
import Address from "../components/Address";
import Greeting from "../components/Greeting";
import FullName from "../components/Fullname";

function App() {
  const [count, setCount] = useState(0);

  const invalidJSX = (
    <>
      <p>paragraph 1</p>
      <p>paragraph 2</p>
    </>
  );

  const spiderman = {
    name: "Spiderman",
    alterEgo: "Peter Parker",
    catchPhrase: "With great power comes great responsibility",
  };

  const spideyJSX = (
    <div>
      <h3>{spiderman.name}</h3>
      <blockquote>{spiderman.catchPhrase}</blockquote>
      <cite>{spiderman.alterEgo}</cite>
    </div>
  );

  function ExampleComponent() {
    return (
      <div className="ExampleComponent componentBox">
        <h1>My Example Component</h1>
        <p>My first React component!</p>
      </div>
    );
  }

  function Welcome(props) {
    return (
      <div className="componentBox">
        <h3>Welcome {props.name}!</h3>
      </div>
    );
  }

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        {spideyJSX}
        <Welcome />
        <FullName />
        <Greeting />
        <ExampleComponent />
        <PropsDisplayer />
        <PropsDisplayer
          prop1="first"
          prop2="second"
          prop3={3}
          name="Aidan"
          age={24}
        />
        <City name="Chicago" state="Illinois" country="USA" />
        <Address
          address="19 James scott close"
          state="ACT"
          country="Australia"
        />

        <City name="Newcastle">
          <div>
            Newcastle is a harbour city in the Australian state of New South
            Wales.
          </div>
          <div>
            <strong>Population:</strong> 322,278 (2016)
          </div>
        </City>

        <p>{invalidJSX}</p>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
