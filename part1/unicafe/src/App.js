import { useState } from "react";
const Statistic = ({ text, value }) => {
  return (
    <tr>
      <td>{text}</td>
      <td> {value}</td>
    </tr>
  );
};
const Statistics = ({ goodCount, neutralCount, badCount }) => {
  if (!goodCount && !neutralCount && !badCount) return <p>No Feedback Given</p>;
  return (
    <>
      <h1>Statistics</h1>
      <table>
        <tbody>
          <Statistic text="good" value={goodCount} />
          <Statistic text="neutral" value={neutralCount} />
          <Statistic text="bad" value={badCount} />
          <Statistic text="all" value={goodCount + neutralCount + badCount} />

          {/* I was unsure about the average - the exercise said "the average score (good: 1, neutral: 0, bad: -1)" which is what I have implemented. 
          The image below showed an average of 0.5555...6 % Which doesn't seem to match these instructions  */}
          <Statistic text="average" value={goodCount - badCount} />
          <Statistic
            text="positive"
            value={`${
              (goodCount / (goodCount + neutralCount + badCount)) * 100
            }%`}
          />
        </tbody>
      </table>
    </>
  );
};
const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};
const App = () => {
  // save clicks of each button to its own state
  const [goodCount, setGoodCount] = useState(0);
  const [neutralCount, setNeutralCount] = useState(0);
  const [badCount, setBadCount] = useState(0);
  return (
    <>
      <h1>Give Feedback</h1>
      <Button
        text="good"
        clickHandler={() => {
          setGoodCount((prev) => prev + 1);
        }}
      />
      <Button
        text="neutral"
        clickHandler={() => {
          setNeutralCount((prev) => prev + 1);
        }}
      />
      <Button
        text="bad"
        clickHandler={() => {
          setBadCount((prev) => prev + 1);
        }}
      />
      <Statistics
        goodCount={goodCount}
        neutralCount={neutralCount}
        badCount={badCount}
      />
    </>
  );
};
export default App;
