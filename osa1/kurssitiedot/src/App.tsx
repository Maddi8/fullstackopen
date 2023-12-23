import Content from "./components/Content"
import Header from "./components/Header"
import { Total } from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        part: 'Fundamentals of React',
        exercises: 10
      },
      {
        part: 'Using props to pass data',
        exercises: 7
      },
      {
        part: 'State of a component',
        exercises: 14
      }
    ]
  }
  return (
    <div>
      <Header headerText={course.name} />
      <Content parts={course.parts.map((obj) => obj.part)} exercises={course.parts.map((obj) => obj.exercises)} />
      <Total total={course.parts.map((obj) => obj.exercises).reduce((a, b) => a + b, 0)} />
    </div>
  )
}

export default App