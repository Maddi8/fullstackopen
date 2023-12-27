import { useReducer } from "react";
import { Feedback } from "./components/Feedback";
import { Statistics } from "./components/Statistics";

export interface State {
  good: number;
  neutral: number;
  bad: number;
}

const App = () => {

  const initialState: State = {
    good: 0,
    neutral: 0,
    bad: 0,
  }

  const reducer = (state: { good: number; neutral: number; bad: number }, action: {type: string}) => {
    console.log(action.type)
    switch (action.type) {
      case "good":
        return { ...state, good: state.good + 1 };
      case "neutral":
        return { ...state, neutral: state.neutral + 1 };
      case "bad":
        return { ...state, bad: state.bad + 1 };
      default:
        throw new Error("Unknown action");
    }
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <Feedback dispatch={dispatch} />
      <Statistics state={state}/>
    </>
  );
};

export default App;
