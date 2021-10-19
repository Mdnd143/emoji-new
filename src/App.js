import "./styles.css";
import React, { useState } from "react";

var headingText = "emoji search";
var emojiDictionary = {
  "😊": "Smiling Face with closed eyes",
  "😐": "Null Face",
  "😁": "laughing face",
  "😍": "smiling face with heart eyes",
  "😒": "unamused face",
  "😎": "smiling face with sunglasses",
  "🤣": "rofl",
  "😢": "crying face",
  "😉": "winking face",
  "😘": "face blowing a kiss"
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
      <p>
        Search the meaning of Emoji or click on an emoji given below as a
        suggestion
      </p>
      <input onChange={emojiInputHandler} />
      <h2>Meaning : {meaning}</h2>
      <h3>Emoji available in our data base</h3>
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
