import React, { useState} from 'react';
import './App.css';
import './index.js';
import ReactDOM from "react-dom";

// constante pour la création du board
const ROW = 4;
const COLS = 4;
const TILES = ROW * COLS;
const EMPTY = TILES - 1;
const SHUFFLE = [60, 80];
const DIRECTIONS_MOVE = ['up', 'down', 'left', 'right'];

// fonction nb aléatoire dans un interval donné
function random (min, max) {
  return min + Math.floor(Math.random() * (max - min + 1));
}

//___________________________________
// Logique du jeu class singleton car le jeu ne s'exécute qu'une fois dans l'applicaiton

class GameState {
  // toutes les tuiles sont à leur place
  static getNewBoard () {
    return Array(TILES).fill(0).map((x, index) => [
      Math.floor(index / ROW),
      index % COLS
    ]);
  }

  // puzzle résolu
  static solved = GameState.getNewBoard();
  static instance = null;
  static getInstance () {
    if (!GameState.instance) GameState.instance = new GameState();
    return GameState.instance;
  }

  constructor () {
    this.NewGame();
  }

  //vérifier si le tableau est résolu
  // compare l’état actuel du tableau avec la propriété statique solved
  resolved () {
    for (let i=0; i<TILES; i++) {
      if (this.board[i][0] !== GameState.solved[i][0]
          || this.board[i][1] !== GameState.solved[i][1])
        return false;
    }
    return true;
  }
// le jeu commence
  NewGame () {
    this.moves = 0;   //le compteur de déplacements est mis à 0,
    this.board = GameState.getNewBoard(); // crée un tableau de jeu
    this.stack = [];  // /la pile d'états précédents est vide et le tableau est à l'état commandé.
    this.shuffle();
  }
 // on mélange un nombre de fois le tableau de manière aléatoire
  shuffle () {
    this.shuffling = true;
    let shuffleMoves = random(...SHUFFLE);
    while (shuffleMoves --> 0) {
      this.moveDir (DIRECTIONS_MOVE[random(0,3)]);
    }
    this.shuffling = false;
  }
// on vérifie si la tuile peut bouger ou non
  //Pour être adjacentes, deux tuiles doivent se trouver dans la même ligne ou la même colonne.
  // Si elles sont dans la même ligne, la différence de leurs index de colonne doit être égale à un.
  // Si elles sont dans la même colonne, la différence de leurs index de ligne doivent être égaux à un.
  canMoveTile (index) {
    if (index < 0 || index >= TILES) return false;

    const tilePos = this.board[index];
    const emptyPos = this.board[EMPTY];

    if (tilePos[0] === emptyPos[0])
      return Math.abs(tilePos[1] - emptyPos[1]) === 1;

    else if (tilePos[1] === emptyPos[1])
      return Math.abs(tilePos[0] - emptyPos[0]) === 1;

    else return false;
  }

  // On déplade la tuile.
  moveTile (index) {
    if (!this.shuffling && this.resolved()) return false;
    if (!this.canMoveTile(index)) return false;

    const emptyPosition = [...this.board[EMPTY]];
    const tilePosition = [...this.board[index]];

    // copie le tableau actuel et échange les positions
    let boardAfterMove = [...this.board];
    boardAfterMove[EMPTY] = tilePosition;
    boardAfterMove[index] = emptyPosition;

    // update le tableau et on compte +1 au compteur de déplacement
    if (!this.shuffling) this.stack.push(this.board);
    this.board = boardAfterMove;
    if (!this.shuffling) this.moves += 1;

    return true;
  }

  // annuler le déplacement précédent.
  undo () {
    if (this.stack.length === 0) return false;
    this.board = this.stack.pop();
    this.moves -= 1;
  }

  // déduire la position de la tuile, de la direction
  // si la direction est 'up', nous voulons déplacer la tuile immédiatement en dessous de celle  vide,
  // si la direction est 'down', alors la tuile juste au-dessus  de celle vide
  moveDir (dir) {
    const poss = this.board[EMPTY];
    const posToMove = dir === 'up' ? [poss[0]+1, poss[1]]
        : dir === 'down' ? [poss[0]-1, poss[1]]
            : dir === 'left' ? [poss[0], poss[1]+1]
                : dir === 'right' ? [poss[0], poss[1]-1]
                    : poss;

    // récupère l'index de la position
    let tileToMove = EMPTY;
    for (let i=0; i<TILES; i++) {
      if (this.board[i][0] === posToMove[0] && this.board[i][1] === posToMove[1]) {
        tileToMove = i;
        break;
      }
    }
    // on bouge la tuile
    this.moveTile(tileToMove);
  }

  getState () {
    const self = this;
    return {
      board: self.board,
      moves: self.moves,
      solved: self.resolved(),
    };
  }
}

//_________________________________________
// Utilisation des Hooks !!
function useGameState () {
  const gameState = GameState.getInstance();
  const [state, setState] = useState(gameState.getState());

  // on start le jeu
  function newGame () {
    gameState.NewGame();
    setState(gameState.getState());
  }

  // on supprime le dernier mouvement
  function undo () {
    gameState.undo();
    setState(gameState.getState());
  }

  // on move la tuile
  function move (index) {
    return function () {
      gameState.moveTile(index);
      setState(gameState.getState());
    }
  }

  return [state.board, state.moves, state.solved, newGame, undo, move];
}


//_______________________________________________
// on positionne les tuiles dans le tableau
function Tile ({index, pos, onClick}) {
  const top = pos[0]*100 + 5;
  const left = pos[1]*100 + 5;
  const bgLeft = (index%4)*100 + 5;
  const bgTop = Math.floor(index/4)*100 + 5;

  return <div
      className='tile'
      onClick={onClick}
      style={{top, left, backgroundPosition: `-${bgLeft}px -${bgTop}px` }}
  />;
}

function Game () {
  const [board, moves, solved, newGame, undo, move] = useGameState();

  return (
      <div className='game-container'>
        <div className='game-header'>
          <div className='moves'>
            {moves}
          </div>
          <button className='big-button' onClick={undo}> UNDO </button>
          <button className='big-button' onClick={newGame}> RESTART </button>
        </div>

        <div className='board'>
          {
            board.slice(0,-1).map((pos, index) => (
                <Tile
                    key={index}
                    index={index}
                    pos={pos}
                    onClick={move(index)} />
            ))
          }
          { solved &&
          <div className='overlay'>
            <button className='big-button' onClick={newGame}>
              PLAY AGAIN
            </button>
          </div>
          }
        </div>
      </div>
  );
}

ReactDOM.render(<Game  />, document.getElementById('root'));
export default Game ;