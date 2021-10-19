import "./styles.css";
import React, { useState } from "react";

var headingText = "Inside Outt";
var emojiDictionary = {
  "😊": "Smiling Face with Smiling Eyes",
  "😐": "Neutral Face",
  "🔥": "Fire",
  "🐱": "Cat Face",
  "🎂": "Birthday Cake",
  "💓": "Beating Heart",
  "🐬": "Dolphin",
  "💡": "Object",
  "🎌": "Flag",
  "💯": "100Point"
};
var emojiWeKnow = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");
  function emojiInputHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "we do not have this in our database";
    }
    setMeaning(meaning);
  }
  function emojiClicHandler(Emoji) {
    var meaning = emojiDictionary[Emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <p>Search the meaning of Emoji...</p>
      <input onChange={emojiInputHandler} />
      <h2>Meaning :- {meaning}</h2>
      <h3>Emoji We Knows</h3>
      {emojiWeKnow.map(function (Emoji) {
        return (
          <span
            onClick={() => emojiClicHandler(Emoji)}
            style={{ fontSize: "2rem", padding: ".5rem", cursor: "pointer" }}
          >
            {" "}
            {Emoji}{" "}
          </span>
        );
      })}
    </div>
  );
}
