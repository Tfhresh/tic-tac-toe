import React from 'react'

const GameBoard = ({ playedBoardBoxes, onPlayerPlay }) => {

  return (
    <div className='grid grid-cols-3 bg-[rgba(255,255,255,.1)] p-5 gap-5 rounded-2xl'>
      {Array.from(Array(9), (_, i) => i).map((el, index) => {
        return (
          <div key={el}
            onClick={() => {
              onPlayerPlay(index);
            }}
            className='bg-[#203364] rounded-2xl flex items-center justify-center h-[80px] cursor-pointer text-5xl font-extrabold text-green-400'>
            {playedBoardBoxes[el] && (playedBoardBoxes[el] === 0 ? <span className='text-green-400'>O</span> : <span className='text-red-400'>X</span>)}
          </div>
        )
      })}
    </div>
  )
}

export default GameBoard