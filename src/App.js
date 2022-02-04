import React, { useState, useEffect } from "react";
import "./App.css";

export default function App() {
  const [joke, setJoke] = useState({
    setup: "",
    punchline: "",
  });
  const [showPunchline, setShowPunchline] = useState(false);
  const [newJoke, setNewJoke] = useState(false);

  // fetch the JSON inside React hook useEffect(callbackFunction, dependencyArray)
  useEffect(() => {
    fetch("")
      .then((res) => res.json())
      .then((joke) =>
        setJoke({
          setup: joke.setup,
          punchline: joke.punchline,
        })
      );
  }, [newJoke]); // when newJoke state changes, run useEffect again

  // button event handler to set state to show punchline
  function showJokePunchline() {
    setShowPunchline(true);
  }

  // button event handler to set state to get new joke
  function getNewJoke() {
    setShowPunchline(false);
    setNewJoke((prevNewJoke) => !prevNewJoke);
  }

  return (
    <div className="joke-container">
      <h2 className="joke-header">Joke of the Day</h2>
      <hr />
      <h3 className="joke-setup">{joke.setup}</h3>
      {showPunchline ? (
        <div>
          <p className="joke-punchline">{joke.punchline}</p>
          <button className="joke-button" onClick={getNewJoke}>
            New Joke
          </button>
        </div>
      ) : (
        <button className="joke-button" onClick={showJokePunchline}>
          Show Punchline
        </button>
      )}
    </div>
  );
}
