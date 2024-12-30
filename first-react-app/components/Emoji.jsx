import { useState } from "react";

function Emoji() {
  const [mood, setMood] = useState("😃");

  const angryMood = () => {
    setMood((prevMood) => (prevMood === "😃" ? "😡" : "😃"));
  };

  return (
    <div className="moodChanger">
      {mood}
      <button onClick={angryMood}>Change Mood</button>
    </div>
  );
}
export default Emoji;
