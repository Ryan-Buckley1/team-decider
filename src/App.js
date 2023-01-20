import logo from "./logo.svg";
import "./App.css";
import TeamSelect from "./components/TeamSelect";
import PlayerInput from "./components/PlayerInput";

function App() {
  return (
    <div className="App">
      <PlayerInput />
      <TeamSelect />
    </div>
  );
}

export default App;
