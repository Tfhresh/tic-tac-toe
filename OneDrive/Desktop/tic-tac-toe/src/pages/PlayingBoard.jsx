import React, { useEffect, useState } from 'react'
import PlayerCard from '../components/PlayerCard'
import GameBoard from '../components/GameBoard'
// import { playersConstant } from '../constant/players';




const PlayingBoard = () => {

  const [playerTurn, setPlayerTurn] = useState(1);

  const [boardBoxes, setBoardBoxes] = useState([-1, -1, -1, -1, -1, -1, -1, -1, -1]);

  const handlePlay = (index) => {
    setBoardBoxes(prevBoxes => {
      // const boxIndex = prevBoxes.find(el => el.index === index);
      // if (boxIndex) {
      //   return prevBoxes;
      // }
      // setPlayerTurn(playerTurn === playersConstant.PLAYER1 ? playersConstant.PLAYER2 : playersConstant.PLAYER1);
      // return [...prevBoxes, { player: playerTurn, index }];

      if (prevBoxes[index] === -1) {
        prevBoxes[index] = playerTurn;
        return [...prevBoxes];
      }
      return prevBoxes;
    });
    setPlayerTurn(() => playerTurn === 0 ? 1 : 0);
  };


  const conditionCheck = (i1, i2, i3) => (boardBoxes[i1] === 0 && boardBoxes[i2] === 0 && boardBoxes[i3] === 0) ||
    (boardBoxes[i1] === 1 && boardBoxes[i2] === 1 && boardBoxes[i3] === 1)
    ;


  const checkWin = () => {

    // console.log(boardBoxes[0] === boardBoxes[1] === boardBoxes[2]);

    if (conditionCheck(0, 1, 2) ||
      conditionCheck(3, 4, 5) ||
      conditionCheck(6, 7, 8) ||
      conditionCheck(0, 3, 6) ||
      conditionCheck(1, 4, 7) ||
      conditionCheck(2, 5, 8) ||
      conditionCheck(0, 4, 8) ||
      conditionCheck(2, 4, 6)
    ) {
      alert(`player${playerTurn} wins!!!`);
    }
  };

  checkWin();

  return (
    <div className='w-[375px] h-[calc(100vh-40px)] max-h-[667px] bg-[#203364] rounded-2xl'>
      <div className='flex items-center justify-center mt-8 mb-5'>
        <h4 className='text-xs text-gray-100 font-medium'>Players Mode</h4>
      </div>
      <div className='flex items-center justify-between px-5'>
        <PlayerCard playerName="Player 1:" playerScore={0} />
        <PlayerCard playerName="Player 2:" playerScore={1} />
      </div>
      <div className='text-center mt-4 mb-8'>
        <p className='text-sm font-extrabold text-white'>Player 1 Turn</p>
      </div>
      <div className='px-5'>
        <GameBoard playedBoardBoxes={boardBoxes} onPlayerPlay={handlePlay} />
      </div>
    </div>
  )
}

export default PlayingBoard