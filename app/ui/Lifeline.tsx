import { cilBan, cilPeople, cilSearch, cilShareAll, cilSwapHorizontal } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import React, { useState } from 'react'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { updateLife } from '../lib/features/life/lifeSlice'

const Lifeline = ({ currentPlayer }: { currentPlayer: string }) => {
  const life = useAppSelector(state => state.life.value);

  const dispatch = useAppDispatch();

  const handleClick = (lifeName: string) => {
    dispatch(updateLife({
      player: currentPlayer,
      life: lifeName
    }));
  }

  return (
    <div className='h-full flex justify-center gap-16'>
      <div className='p-2'>
        <div className='h-full rounded-full flex justify-center items-center relative border border-4 border-yellow-500 aria-disabled:cursor-not-allowed cursor-pointer'
          style={{ backgroundImage: 'linear-gradient(to bottom, #000000 ,#390F4E)', aspectRatio: '1/1', boxShadow: '0px 0px 20px 8px #D4AF37' }}
          aria-disabled={!life[currentPlayer]?.life1}
          onClick={() => handleClick('life1')}
        >
          <CIcon className='h-12 w-12 text-white' icon={cilSwapHorizontal} />
          <CIcon className={`absolute h-full text-red-700 ${life[currentPlayer]?.life1 ? 'hidden' : ''}`} icon={cilBan} />

        </div>
      </div>
      <div className='p-2'>
        <div className='h-full rounded-full flex justify-center items-center relative border border-4 border-yellow-500 aria-disabled:cursor-not-allowed cursor-pointer'
          style={{ backgroundImage: 'linear-gradient(to bottom, #000000 ,#390F4E)', aspectRatio: '1/1', boxShadow: '0px 0px 20px 8px #D4AF37' }}
          aria-disabled={!life[currentPlayer]?.life2}
          onClick={() => handleClick('life2')}
        >
          <CIcon className='h-12 w-12 text-white' icon={cilPeople} />
          <CIcon className={`absolute h-full text-red-700 ${life[currentPlayer]?.life2 ? 'hidden' : ''}`} icon={cilBan} />

        </div>
      </div>
      <div className='p-2'>
        <div className='h-full rounded-full flex justify-center items-center relative border border-4 border-yellow-500 aria-disabled:cursor-not-allowed cursor-pointer'
          style={{ backgroundImage: 'linear-gradient(to bottom, #000000 ,#390F4E)', aspectRatio: '1/1', boxShadow: '0px 0px 20px 8px #D4AF37' }}
          aria-disabled={!life[currentPlayer]?.life3}
          onClick={() => handleClick('life3')}
        >
          <CIcon className='h-12 w-12 text-white' icon={cilSearch} />
          <CIcon className={`absolute h-full text-red-700 ${life[currentPlayer]?.life3 ? 'hidden' : ''}`} icon={cilBan} />

        </div>
      </div>
      <div className='p-2'>
        <div className='h-full rounded-full flex justify-center items-center relative border border-4 border-yellow-500 aria-disabled:cursor-not-allowed cursor-pointer'
          style={{ backgroundImage: 'linear-gradient(to bottom, #000000 ,#390F4E)', aspectRatio: '1/1', boxShadow: '0px 0px 20px 8px #D4AF37' }}
          aria-disabled={!life[currentPlayer]?.life4}
          onClick={() => handleClick('life4')}
        >
          <CIcon className='h-12 w-12 text-white' icon={cilShareAll} />
          <CIcon className={`absolute h-full text-red-700 ${life[currentPlayer]?.life4 ? 'hidden' : ''}`} icon={cilBan} />

        </div>
      </div>
    </div>
  )
}

export default Lifeline