import logo from "./logo.svg";
import "./App.css";
import ComA from "./ComA";
import { createContext } from "react";


const FirstName = createContext();
  const LastName = createContext();

function App() {
  return (
    <div className="App">
      <FirstName.Provider value={'manisha'}>
        <LastName.Provider value={'nayak'}>
          <ComA />
        </LastName.Provider>
      </FirstName.Provider>
    </div>
  );
}

export default App;
export { FirstName, LastName };
