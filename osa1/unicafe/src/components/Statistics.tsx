import { State } from "../App";
import { StatisticLine } from "./StatisticLine";

export const Statistics = ({ state }: { state: State }) => {
  const all = state.good + state.neutral + state.bad;
  const average = (state.good - state.bad) / (state.good + state.neutral + state.bad);
  if (all === 0) {
    return (
      <>
        <h1>Statistics</h1>
        <p>No feedback given</p>
      </>
    );
  }
  return (
    <>
      <h1>statistics</h1>
      <table>
        <tbody>
          <StatisticLine text="good" value={state.good} />
          <StatisticLine text="neutral" value={state.neutral} />
          <StatisticLine text="bad" value={state.bad} />
          <StatisticLine text="all" value={all} />
          <StatisticLine text="average" value={average.toFixed(3)} />
          <StatisticLine text="positive" value={parseFloat((state.good / all * 100).toFixed(1)).toString() + "%"} />
        </tbody>
      </table>
    </>
  );
};
