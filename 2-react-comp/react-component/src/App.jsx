// import { Kgbutton } from "./Kgbutton";  //write when particular function is exported from Kgbutton.jsx file not all if there are multiple functions in Kgbutton.jsx file we use the curlay braces and write the function name in it

import Hello from "./Hello";
import Kgbutton from "./Kgbutton";
import Random from "./Random";
function App(){
  return (
  <div>
    <h1>Manav Sheth</h1>
    <Hello></Hello>
    <Kgbutton/>
    <Random/>
    <Random/>
    <Random/>
    <Random/>
    <Random/>
  </div>
  );
}
export default App;