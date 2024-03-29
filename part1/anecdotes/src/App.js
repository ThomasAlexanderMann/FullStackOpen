import { useState } from "react";

const App = () => {
  const anecdotes = [
    "If it hurts, do it more often.",
    "Adding manpower to a late software project makes it later!",
    "The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.",
    "Any fool can write code that a computer can understand. Good programmers write code that humans can understand.",
    "Premature optimization is the root of all evil.",
    "Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.",
    "Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.",
  ];

  const randomInt = (max) => {
    return Math.floor(Math.random() * max);
  };

  /* ---- State ---- */
  const [currentAnecdoteIndex, setCurrentAnecdoteIndex] = useState(
    randomInt(anecdotes.length)
  );
  const [votes, setVotes] = useState(Array(anecdotes.length).fill(0));

  /* ---- Anecdote with the most votes ---- */
  const highestVote = Math.max(...votes);
  const highestVoteIndex = votes.indexOf(highestVote); // first occurring index with a value of highestVote

  return (
    <>
      <h2>Anecdote of the day</h2>
      <div style={{ margin: "1.5rem 0", minHeight: "80px" }}>
        {anecdotes[currentAnecdoteIndex]}
      </div>

      <button
        onClick={() => {
          setVotes((prev) => {
            const votesCopy = [...prev];
            votesCopy[currentAnecdoteIndex] += 1;
            return votesCopy;
          });
        }}
      >
        vote
      </button>

      <button
        onClick={() => {
          setCurrentAnecdoteIndex(randomInt(anecdotes.length));
        }}
      >
        next anecdote
      </button>

      <h2>Anecdote with the most votes</h2>
      <div style={{ margin: "1.5rem 0" }}>{anecdotes[highestVoteIndex]}</div>
    </>
  );
};

export default App;
