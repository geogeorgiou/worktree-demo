import "./App.css";
import reactLogo from "./assets/react.svg";

const App = () => (
  <div className="App">
    <div>
      <a href="https://vitejs.dev" target="_blank">
        <img src="/vite.svg" className="logo" alt="Vite logo" />
      </a>
      <a href="https://reactjs.org" target="_blank">
        <img src={reactLogo} className="logo react" alt="React logo" />
      </a>
    </div>
    <h1>Vite + React (Worktree Mode)</h1>
    <div className="card">
      <div>Summary</div>
      <br />
      <button>
        Not a perfect workflow 🤔 but very useful 💪 when lot's of code is not
        pushed yet and we don’t want to check what's working and what's not..
      </button>
      <br />
      <br />
      <button>
        It's flow friendly 🤩 since you don't have to think ! Just cd to
        worktree, get changes/install and start 💻
      </button>
    </div>
    <p>Caveats:</p>
    <p className="read-the-docs">
      1. Cannot checkout the same branch twice 🚫!!!
    </p>
    <p className="read-the-docs">2. Worktree 🌲 remove !== Branch delete </p>
    <p className="read-the-docs">3. Create 🗂 and install dummy worktree </p>
  </div>
);

export default App;
