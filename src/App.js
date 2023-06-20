import { useState } from "react";
import "./styles.css";

export default function App() {
  const [option, setOption] = useState([]);
  const handleChangeOption = (e) => {
    setOption([...option, e.target.value]);
  };

  console.log(option);
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <label htmlFor="cars">Choose a car:</label>

      <select
        name="cars"
        id="cars"
        value={option}
        onChange={handleChangeOption}
        multiple
      >
        <option value="volvo">Volvo</option>
        <option value="saab">Saab</option>
        <option value="mercedes">Mercedes</option>
        <option value="audi">Audi</option>
      </select>
    </div>
  );
}
