import React from 'react'

const PlayerCard = ({playerName, playerScore}) => {
  return (
    <div className='backdrop-blur-2xl py-1.5 px-1.5 border-2 border-[rgba(255,255,255,.3)] bg-[rgba(255,255,255,.1)] rounded w-[100px]'>
      <div className='size-3.5 border border-gray-100 rounded-full' />
      <div className='flex justify-between items-center gap-2 mt-2'>
        <span className='text-[7px] text-white font-extrabold tracking-widest'>{playerName}</span>
        <span className='text-[7px] text-white font-extrabold tracking-widest'>{playerScore}</span>
      </div>
    </div>
  )
}

export default PlayerCard