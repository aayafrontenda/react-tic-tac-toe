import { useState, useRef } from 'react'
import './App.css'

function App() {
  const [move, setMove] = useState('◯');
  const [gameOver, setGameOver] = useState(false);

  const [gameGrid, setGameGrid] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', '']    
  ]);

  const makeMove = (row, column) => {
    if (gameGrid[row][column] === '') {
      let copy = [...gameGrid]
      copy[row][column] = move;
      setGameGrid(copy);
    }
    
    if (move === '◯')
      setMove('✕');
    else 
      setMove('◯');
    setGameOver(checkWin());
  }

  function handleRestart() {
    setGameOver(false);
    setGameGrid([
      ['', '', ''],
      ['', '', ''],
      ['', '', '']    
    ]);
  }

  const checkWin = () => {
      let sum = 0;
      for (let row = 0; row < 3; row++) {
        sum = 0;
        for (let column = 0; column < 3; column++) {
          if (gameGrid[row][column] === move)
            sum += 1;
        }
        if (sum === 3)
          return true;
      }

      console.log('check 1');

      for (let column = 0; column < 3; column++) {
        sum = 0;
        for (let row = 0; row < 3; row++) {
          if (gameGrid[row][column] === move)
            sum += 1;
        }
        if (sum === 3)
          return true;
      }

      console.log('check 2');

      if (gameGrid[0][0] === move 
        && gameGrid[1][1] === move 
        && gameGrid[2][2] === move)
          return true;

      console.log('check 3');

      if (gameGrid[0][2] === move 
          && gameGrid[1][1] === move 
          && gameGrid[2][0] === move)
            return true;

      console.log('check 4');
      return false;
  }

  return (
    <div className="App vertically-center">
      {(gameOver) ? 
        <h1>Player {move === '◯' ? '✕' :  '◯'} won!</h1> 
        :
          <div className='game-grid'>
          <button className='vertically-center' onClick={() => makeMove(0, 0)} disabled={gameGrid[0][0] !== ''}>{gameGrid[0][0]}</button>
          <button className='vertically-center' onClick={() => makeMove(0, 1)} disabled={gameGrid[0][1] !== ''}>{gameGrid[0][1]}</button>
          <button className='vertically-center' onClick={() => makeMove(0, 2)} disabled={gameGrid[0][2] !== ''}>{gameGrid[0][2]}</button>
          <button className='vertically-center' onClick={() => makeMove(1, 0)} disabled={gameGrid[1][0] !== ''}>{gameGrid[1][0]}</button>
          <button className='vertically-center' onClick={() => makeMove(1, 1)} disabled={gameGrid[1][1] !== ''}>{gameGrid[1][1]}</button>
          <button className='vertically-center' onClick={() => makeMove(1, 2)} disabled={gameGrid[1][2] !== ''}>{gameGrid[1][2]}</button>
          <button className='vertically-center' onClick={() => makeMove(2, 0)} disabled={gameGrid[2][0] !== ''}>{gameGrid[2][0]}</button>
          <button className='vertically-center' onClick={() => makeMove(2, 1)} disabled={gameGrid[2][1] !== ''}>{gameGrid[2][1]}</button>
          <button className='vertically-center' onClick={() => makeMove(2, 2)} disabled={gameGrid[2][2] !== ''}>{gameGrid[2][2]}</button>
        </div>
      }

      <button style={{marginTop: '25px'}} onClick={handleRestart} className='vertically-center'>Restart</button>
    </div>
  )
}

export default App
