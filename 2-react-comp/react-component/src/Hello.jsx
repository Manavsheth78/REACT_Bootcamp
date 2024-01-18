function Hello() {
  let myName = "Manav";
  let number = 101;
  let fullName = () => {
    return "Manav Sheth.";
  };

  return (
    <p>
      
      <h3>  Message{number}:  I am {fullName()} </h3>
    </p>
  );
}
export default Hello;
