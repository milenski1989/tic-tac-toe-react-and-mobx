import React, { useMemo } from "react";
import Square from "./Square";
import "./Board.css";
import Store from "./Store";
import { observer } from "mobx-react";

const Board = observer(() => {
  const store = useMemo(() => new Store(), []);

  return (
    <>
      <div className="board">
        {store.boardArr.map((element, index) => (
          <Square store={store} index={index} key={index} element={element} />
        ))}
      </div>

      {store.winner ? (
        <>
          {store.disableAllFields = true}
          <h1 className="result">{store.activePlayer} wins!</h1>{" "}
          <button className="btn" onClick={store.playAgain}>
            play another game
          </button>
        </>
      ) :
       (
        <>
          <button className="btn" onClick={store.clearAll}>
            clear all
          </button>
        </>
      )}

    </>
  );
});

export default Board;


