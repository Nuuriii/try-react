import { Props } from "./components/props/props";
import { CardList } from "./components/props/cardList";
import { Counter } from "./components/state/counter";
import { State } from "./components/state/state";
import "./App.css";

function App() {
  return (
    <>
      <div>
        <Props name="Nurrohmann" />
        {/* <CardList /> */}
        {/* <State /> */}
        <Counter />
      </div>
    </>
  );
}

export default App;
