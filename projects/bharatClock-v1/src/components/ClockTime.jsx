let ClockTime = () => {
  const time = new Date();

  return (
    <h1 className="time">
      This is the Current Time {time.toLocaleDateString()} -{"  "}
      {time.toLocaleTimeString()}
    </h1>
  );
};

export default ClockTime;
