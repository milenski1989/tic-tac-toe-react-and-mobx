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

      {store.result ? (
        <>
          <h1 className="result">{store.activePlayer} wins!</h1>{" "}
          <button className="play-again" onClick={store.playAgain}>play again</button>
        </>
      ) : 
      <>
      <button className="play-again" onClick={store.playAgain}>play again</button>
      </>
      }
    </>
  );
});

export default Board;
