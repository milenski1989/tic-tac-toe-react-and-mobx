import React, { useMemo } from "react";
import "./Square.css";
import Store from "./Store";
import { observer } from "mobx-react";

const Square = observer(({index, store }) => {
 

  return (
    <>
      <button
        className="field"
      
        onClick={() => store.play(index)}
      >
        {store.boardArr[index]}
      </button>
    </>
  );
});

export default Square;
