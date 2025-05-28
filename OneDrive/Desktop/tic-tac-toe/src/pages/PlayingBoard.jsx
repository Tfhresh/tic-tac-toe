import { useEffect, useState } from 'react'
import PlayerCard from '../components/PlayerCard'
import GameBoard from '../components/GameBoard'

const PlayingBoard = () => {

  const [playerTurn, setPlayerTurn] = useState(0);
  const [players, setPlayers] = useState([
    {
      player: 1,
      score: 0
    },
    {
      player: 2,
      score: 0
    }
  ]);
  const [boardBoxes, setBoardBoxes] = useState(Array.from(new Array(9)).map(() => undefined));

  const handlePlay = (index) => {
    setBoardBoxes(prevBoxes => {
      if (prevBoxes[index] === undefined) {
        prevBoxes[index] = playerTurn;
        setPlayerTurn(playerTurn === 0 ? 1 : 0);
        return [...prevBoxes];
      }
      return prevBoxes;
    });
  };

  useEffect(() => {
     const checkWin = () => {
      const conditionCheck = (i1, i2, i3) =>
      (boardBoxes[i1] === 0 && boardBoxes[i2] === 0 && boardBoxes[i3] === 0) ||
      (boardBoxes[i1] === 1 && boardBoxes[i2] === 1 && boardBoxes[i3] === 1);

      if (conditionCheck(0, 1, 2) ||
        conditionCheck(3, 4, 5) ||
        conditionCheck(6, 7, 8) ||
        conditionCheck(0, 3, 6) ||
        conditionCheck(1, 4, 7) ||
        conditionCheck(2, 5, 8) ||
        conditionCheck(0, 4, 8) ||
        conditionCheck(2, 4, 6)
      ) {
        setPlayers(prevPlayers=> {
          prevPlayers[playerTurn] = {
            ...prevPlayers[playerTurn],
            score: prevPlayers[playerTurn].score + 1
          } 
          return [...prevPlayers];
        });
        setTimeout(()=> {
          setBoardBoxes([...Array.from(new Array(9)).map(() => undefined)]);
        }, 1000);
      }
    };

    checkWin();
  }, [boardBoxes, playerTurn]);


  return (
    <div className='w-[375px] h-[calc(100vh-40px)] max-h-[667px] bg-[#203364] rounded-2xl'>
      <div className='flex items-center justify-center mt-8 mb-5'>
        <h4 className='text-xs text-gray-100 font-medium'>Players Mode</h4>
      </div>
      <div className='flex items-center justify-between px-5'>
        <PlayerCard playerName={`Player ${players[0].player}`} playerScore={players[0].score} />
        <PlayerCard playerName={`Player ${players[1].player}`} playerScore={players[1].score} />
      </div>
      <div className='text-center mt-4 mb-8'>
        <p className='text-sm font-extrabold text-white'>Player {players[playerTurn].player} Turn</p>
      </div>
      <div className='px-5'>
        {/* <button></button> */}
        <GameBoard playedBoardBoxes={boardBoxes} onPlayerPlay={handlePlay} />
      </div>
    </div>
  )
}

export default PlayingBoard