import "./styles.css";
import React, { useState, useEffect } from "react";

const API_URL = "http://api.icndb.com/jokes/random";

export default function App() {
  const [joke, setJoke] = useState("");

  const generateJoke = () => {
    fetch(API_URL)
      .then(res => res.json())
      .then(data => setJoke(data.value.joke))
  }

  useEffect(() => {
    generateJoke();
  }, [])
  return (
    <div className="Box">
      <h3>Chuck Norris Jokes</h3>
      <p dangerouslySetInnerHTML={{ __html: joke }} />
      <button onClick={generateJoke}>Get a new Joke </button>
    </div>
  );
}
