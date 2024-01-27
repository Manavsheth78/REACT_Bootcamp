import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonsContainer from "./components/ButtonsContainer";
import { useState } from "react";
function App() {
  const [calValue, setCalValue] = useState("");

  return (
    <>
      <div className={styles.wrapper_calculator}>
        <Display displayValue={calValue}></Display>
        <ButtonsContainer></ButtonsContainer>
      </div>
    </>
  );
}

export default App;
