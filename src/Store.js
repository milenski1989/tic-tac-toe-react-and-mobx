import "core-js/stable";
import "regenerator-runtime/runtime";
import { action, observable} from "mobx";
import _ from "lodash";

const playerOne = "X";
const playerTwo = "O";

class Store {
  @observable boardArr = Array(9).fill(null);
  @observable activePlayer = playerOne;
  @observable winner = false;
  @observable resultX = 0
  @observable resultO = 0
  @observable disableAllFields = false


  @action.bound play(index) {
    if (this.boardArr[index]) {
      return;
    }
  
    this.boardArr[index] = this.activePlayer;

    switch (true) {
      case this.boardArr[0] === this.activePlayer &&
        this.boardArr[1] === this.activePlayer &&
        this.boardArr[2] === this.activePlayer:
        this.winner = true;
        return;

      case this.boardArr[3] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[5] === this.activePlayer:
        this.winner = true;
      return;
      case this.boardArr[6] === this.activePlayer &&
        this.boardArr[7] === this.activePlayer &&
        this.boardArr[8] === this.activePlayer:
        this.winner = true;
    return;
      case this.boardArr[0] === this.activePlayer &&
        this.boardArr[3] === this.activePlayer &&
        this.boardArr[6] === this.activePlayer:
        this.winner = true;
        return;
      case this.boardArr[1] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[7] === this.activePlayer:
        this.winner = true;
        return;
      case this.boardArr[2] === this.activePlayer &&
        this.boardArr[5] === this.activePlayer &&
        this.boardArr[8] === this.activePlayer:
        this.winner = true;
        return;
      case this.boardArr[0] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[8] === this.activePlayer:
        this.winner = true;
        return;
      case this.boardArr[2] === this.activePlayer &&
        this.boardArr[4] === this.activePlayer &&
        this.boardArr[6] === this.activePlayer:
        this.winner = true;
        return;
      default:
        break;
    }

    
    if (this.activePlayer === playerOne) {
      this.activePlayer = playerTwo;
    } else {
      this.activePlayer = playerOne;
    }


  }

  @action.bound playAgain() {
    this.activePlayer = playerOne;
    this.winner = false;
    this.boardArr = Array(9).fill(null);
    this.disableAllFields = false
  }
  @action.bound clearAll(){
    this.activePlayer = playerOne;
    this.boardArr = Array(9).fill(null);
    this.disableAllFields = false
  }



}
export default Store;
