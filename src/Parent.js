import React, { useState } from "react";
import { getRandomColor } from "./randomColorGenerator.js";
import Child from "./Child";

function Parent() {
  const randomColor = getRandomColor();
  const [color, setColor] = useState(randomColor);

  function handleChangeColor(newChildColor){
    setColor(getRandomColor());
    setChildrenColor(newChildColor);
  }

  return (
    
    <div className="parent" style={{ backgroundColor: color }}>
      <Child color={color} onChangeColor={handleChangeColor} />
      <Child color={color} onChangeColor={handleChangeColor} />
    </div>
  );
}

export default Parent;
