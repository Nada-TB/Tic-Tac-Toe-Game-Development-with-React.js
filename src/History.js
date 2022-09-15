import React, { useState } from "react";

const History = (props) => {
  return (
    <div className={"history"}>
      {props.history.map((elt, index) => (
        <button key={index} onClick={() => props.onClick(index)}>
          {index === 0 ? "reset" : "Go to #" + index}
        </button>
      ))}
    </div>
  );
};

export default History;
