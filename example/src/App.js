import React from "react";
import AnimatedNumbers from "./module";
import "./App.css";

function App() {
  const [num, setNum] = React.useState(331231);
  return (
    <div className="container">
      <AnimatedNumbers
        includeComma
        animateToNumber={num}
        fontStyle={{ fontSize: 32 }}
        // configs={[
        //   { mass: 1, tension: 220, friction: 100 },
        //   { mass: 1, tension: 180, friction: 130 },
        //   { mass: 1, tension: 280, friction: 90 },
        //   { mass: 1, tension: 180, friction: 135 },
        //   { mass: 1, tension: 260, friction: 100 },
        //   { mass: 1, tension: 210, friction: 180 },
        // ]}
        configs={(number, index) => {
          return { mass: 1, tension: 230 * (index + 1), friction: 140 };
        }}
      ></AnimatedNumbers>
      <div>
        <button onClick={() => setNum((state) => state + 31234)}>+</button>
        <button onClick={() => setNum((state) => state - 31234)}>-</button>
      </div>
    </div>
  );
}

export default App;
