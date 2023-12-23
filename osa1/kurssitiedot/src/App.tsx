import Content from "./components/Content"
import Header from "./components/Header"
import { Total } from "./components/Total"

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      { name: 'Fundamentals of React', exercises: 10 },
      { name: 'Using props to pass data', exercises: 7 },
      { name: 'State of a component', exercises: 14 }
    ]
  };

  const totalExercises = course.parts.reduce((total, part) => total + part.exercises, 0);

  return (
    <div>
      <Header headerText={course.name} />
      <Content parts={course.parts.map(part => part.name)} exercises={course.parts.map(part => part.exercises)} />
      <Total total={totalExercises} />
    </div>
  );
};

export default App