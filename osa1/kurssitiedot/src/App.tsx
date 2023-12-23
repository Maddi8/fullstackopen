import Content from "./components/Content"
import Header from "./components/Header"
import { Total } from "./components/Total"

const App = () => {
  const course = 'Half Stack application development'
  const parts = ['Fundamentals of React', 'Using props to pass data', 'State of a component']
  const exercises = [10, 7, 14]

  return (
    <div>
      <Header headerText={course} />
      <Content parts={parts} exercises={exercises} />
      <Total total={exercises.reduce((a, b) => a + b, 0)} />
    </div>
  )
}

export default App