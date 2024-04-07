'use client'

import React from 'react'
import { scorePyramid } from '../lib/data'
import CIcon from '@coreui/icons-react'
import { cilBarChart } from '@coreui/icons'
import { useAppSelector } from '../lib/hooks'
import { ScoresInterface } from '../lib/definitions'

const Scoreboard = () => {
  // const players: string[] = useAppSelector(state => state.players.value);
  const scores: ScoresInterface = useAppSelector(state => state.scores.value);

  const colors: string[] = ['red', 'blue', 'green', 'yellow', 'purple']
  return (
    <div className='w-1/3 border border-1 border-white rounded-md h-full flex flex-col p-4 gap-2'>
      <div className='flex justify-center items-center gap-2 text-center text-blue-600 p-2 font-medium bg-blue-100 rounded-md'>
        <CIcon className='h-5 w-5' icon={cilBarChart} />Scoreboard
      </div>
      <div style={{scrollbarWidth: 'none'}} className='h-full flex flex-col justify-center items-center overflow-y-auto'>
        <div style={{scrollbarWidth: 'none'}} className='overflow-auto justify-center items-center w-full py-1'>
          {scorePyramid.map((val, ind) => (
            <div className='relative bg-black rounded-md w-full text-center mt-1 text-gray-100 p-2 text-xs font-medium' key={ind}>
              {val.value + '$'}
              <div className='absolute flex gap-1 ml-1 left-0 top-1/2 transform -translate-y-1/2'>
                {
                  Object.keys(scores).map((ele, pos) => (
                    <div className={`bg-${colors[pos%colors.length]}-700 rounded-full h-4 w-4 flex justify-center items-center ${scores[ele].score !== val.id && 'hidden'}`} key={pos}>
                      {ele.charAt(0)}
                    </div>
                  ) )
                }
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Scoreboard