import React, { useMemo } from "react";
import "./Square.css";
import Store from "./Store";
import { observer } from "mobx-react";

const Square = observer(({index, store }) => {
 

  return <button disabled={store.disableAllFields}
        className={store.activePlayer === 'X' ? 'field-red' : 'field-blue'}
        onClick={() => store.play(index)}
        
      >
        {store.boardArr[index]}
      </button>
});

export default Square;
