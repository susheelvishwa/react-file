import React from "react";

function Counter() {
  const [count, setcount] = React.useState(100);

  const incriment = function () {
    setcount(count + 4);
  };

  return (
    <>
      {/* {"for counter "} */}
      <div>
        <h1>this is a counter increse by 4</h1>
        <p>count : {count} </p>
        <button onClick={incriment}>incress button</button>
      </div>
    </>
  );
}

export default Counter;
