import { Fragment } from "react";
import Content from "./components/Content"
import Header from "./components/Header"
import { Total } from "./components/Total"

const App = () => {
  interface Part {
    name: string;
    exercises: number;
  }

  interface Course {
    name: string;
    parts: Part[];
  }

  const course: Course[] = [
    {
      name: 'Half Stack application development',
      parts: [
        { name: 'Fundamentals of React', exercises: 10 },
        { name: 'Using props to pass data', exercises: 7 },
        { name: 'State of a component', exercises: 14 }
      ]
    },
    {
      name: 'Node.js',
      parts: [
        {
          name: 'Routing',
          exercises: 3,
        },
        {
          name: 'Middlewares',
          exercises: 7,
        }
      ]
    }
  ];

  const totalExercises = course.reduce((total, course) => total + course.parts.reduce((total, part) => total + part.exercises, 0), 0);

  return (
    <div>
      {course.map((course, index) => (
          <Fragment key={index}>
            <Header headerText={course.name} />
            <Content parts={course.parts.map(part => part.name)} exercises={course.parts.map(part => part.exercises)} />
          </Fragment>
      ))}
      <Total total={totalExercises} />
    </div>
  );
};

export default App