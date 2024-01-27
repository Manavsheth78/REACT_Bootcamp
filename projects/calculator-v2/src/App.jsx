import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calValue, setCalValue] = useState("");
  const onButtonClick = (buttonText) => {
    console.log(buttonText);
    if (buttonText == "C") {
      setCalValue("");
    } else if (buttonText == "=") {
      const result = eval(calValue);
      setCalValue(result);
    } else {
      const newDisplayValue = calValue + buttonText;
      setCalValue(newDisplayValue);
    }
  };

  return (
    <>
      <div className={styles.wrapper_calculator}>
        <Display displayValue={calValue}></Display>
        <ButtonsContainer onButtonClick={onButtonClick}></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
