import "core-js/stable";
import "regenerator-runtime/runtime";
import { action, observable, runInAction } from "mobx";
import _ from "lodash";

const playerOne = "X";
const playerTwo = "O";

class Store {
  @observable boardArr = Array(9).fill(null);
  @observable activePlayer = playerOne;
  @observable result = false;


  @action.bound play(index) {
    if (this.boardArr[index]) {
      return;
    }
    this.boardArr[index] = this.activePlayer;

    switch (true) {
      case this.boardArr[0] === this.activePlayer &&
        this.boardArr[1] === this.activePlayer &&
        this.boardArr[2] === this.activePlayer:
        this.result = true;
        return;

      case this.boardArr[3] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[5] === this.activePlayer:
        this.result = true;
      return;
      case this.boardArr[6] === this.activePlayer &&
        this.boardArr[7] === this.activePlayer &&
        this.boardArr[8] === this.activePlayer:
        this.result = true;
    return;
      case this.boardArr[0] === this.activePlayer &&
        this.boardArr[3] === this.activePlayer &&
        this.boardArr[6] === this.activePlayer:
        this.result = true;
        return;
      case this.boardArr[1] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[7] === this.activePlayer:
        this.result = true;
        return;
      case this.boardArr[2] === this.activePlayer &&
        this.boardArr[5] === this.activePlayer &&
        this.boardArr[8] === this.activePlayer:
        this.result = true;
        return;
      case this.boardArr[0] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[8] === this.activePlayer:
        this.result = true;
        return;
      case this.boardArr[2] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[6] === this.activePlayer:
        this.result = true;
        return;
      default:
        break;
    }

    if (this.activePlayer === playerOne) {
      this.activePlayer = playerTwo;
    } else {
      this.activePlayer = playerOne;
    }
    console.log(this.activePlayer)
  }

  @action.bound playAgain() {
    this.activePlayer = playerOne;
    this.result = false;
    this.boardArr = Array(9).fill(null);
  }
}
export default Store;
