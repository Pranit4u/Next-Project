'use client'
import React from 'react'
import { useAppSelector } from '../lib/hooks'
import ResultCard from '../ui/ResultCard';

const Page = () => {
  const scores = useAppSelector(state => state.scores.value);
  return (
    <div className='h-screen w-full bg-blue-900 flex items-center justify-center'>
      <div className='flex w-full gap-4 p-4 justify-center'>
      {
        Object.keys(scores).map((val, ind) => (
          <ResultCard title={val} data={scores[val]} key={ind}/>
        ))
      }
      </div>
    </div>
  )
}

export default Page