import { Button } from "./Button"

export const Feedback = ({ dispatch }: any) => {

    const handleClick = (action: string) => {
        dispatch({type: action})
    }

  return (
    <>
        <h1>give feedback</h1>
        <Button handleClick={handleClick} text="good" />
        <Button handleClick={handleClick} text="neutral" />
        <Button handleClick={handleClick} text="bad" />
    </>
  )
}
