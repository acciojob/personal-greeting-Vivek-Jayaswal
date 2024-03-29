
import React from "react";
import './../styles/App.css';

const App = () => {
  const [inputValue,setInputValue] = useState("")
  const onChangeText = (e) => {
    let value = e.target.value;
    setInputValue(value);
  }

  return (
    <div>
        <p>Enter your name:</p>
        <input onChange={onChangeText}/>
        {inputValue && <p>Hello {inputValue}!</p>}
    </div>
  )
}

export default App
