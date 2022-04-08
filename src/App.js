import LandingPage from "./Components/LandingPage/LandingPage";
import Characters from "./Components/Characters/Characters";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./App.css";

function App() {
  const [getIn, setGetIn] = useState(false);
  const [data, setData] = useState([]);
  const [character1, setCharacter1] = useState([]);
  const [character2, setCharacter2] = useState([]);
  const [character3, setCharacter3] = useState([]);

  useEffect(() => {
    async function getCharacter() {
      const response = await axios
        .get("http://hp-api.herokuapp.com/api/characters/students")
        .catch((err) => console.log(err));

      setData(response.data);
    }
    getCharacter();
  }, []);

  const renderCharacter = () => {
    let num1 = Math.round(Math.random() * 101);
    let num2 = Math.round(Math.random() * 101);
    let num3 = Math.round(Math.random() * 101);

    const c1 = data.filter((current, index) => index === num1);
    const c2 = data.filter((current, index) => index === num2);
    const c3 = data.filter((current, index) => index === num3);

    setCharacter1(c1);
    setCharacter2(c2);
    setCharacter3(c3);
  };

  const entrar = () => {
    getIn === false ? setGetIn(true) : setGetIn(false);
  };

  return (
    <div className="App">
      {getIn === false ? (
        <LandingPage entrar={entrar} />
      ) : (
        <header className="App-header">
          <Characters
            renderCharacter={renderCharacter}
            character1={character1}
            character2={character2}
            character3={character3}
            data={data}
          />
        </header>
      )}
    </div>
  );
}

export default App;
