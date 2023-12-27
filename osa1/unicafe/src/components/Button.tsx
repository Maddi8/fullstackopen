export const Button = ({handleClick, text}: {handleClick: (text: string) => void, text: string}) => <button onClick={() => handleClick(text)}>{text}</button>
