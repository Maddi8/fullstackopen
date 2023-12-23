import React from "react";
import Part from "./Part";

const Content = ({parts, exercises}: {parts: string[]; exercises: number[]}) => {
  return (
    <>
      {parts.map((part, index) => (
        <Part key={index} part={part} exercise={exercises[index]} />
      ))}
    </>
  );
};

export default Content;
