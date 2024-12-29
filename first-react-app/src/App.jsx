import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import PropsDisplayer from "../components/PropsDisplayer";
import City from "../components/City";
import Address from "../components/Address";
import Greeting from "../components/Greeting";
import FullName from "../components/Fullname";
import ComplexComment from "../components/ComplexComponent";
import { Callout } from "../components/Callout";
import { FancyBox } from "../components/Callout";
import MoviesList from "../components/MoviesList";

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

  const comment = {
    date: new Date(),
    text: "I hope you enjoy learning React!",
    author: {
      // author is also an object
      name: "Hello Kitty",
      avatarUrl: "https://placekitten.com/g/64/64",
    },
  };

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
        // render the Callout component with FullName as children
        <FancyBox>
          <p>Hi There</p>
          <p>stupid</p>
        </FancyBox>
        <MoviesList></MoviesList>
        <Callout
          title="Nested React Component"
          message="Simple message with a fancy box applied via composition"
        >
          <FullName first="Elon" last="Musk" />
        </Callout>
        ;
        <FullName first="aidan" middle="gustav" last="herstik" />
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
        <ComplexComment
          author={comment.author}
          date={comment.date}
          text={comment.text}
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
