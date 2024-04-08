'use client'
import React from 'react'
import { useAppSelector } from '../lib/hooks'
import ResultCard from '../ui/ResultCard';
import Link from 'next/link';

const Page = () => {
  const scores = useAppSelector(state => state.scores.value);
  const players = useAppSelector(state => state.players.value);
  const scoreValues = players.map( val => scores[val].score );
  return (
    <div className='h-screen w-full bg-blue-900 flex flex-col items-center justify-center'>
      <div className='flex w-full gap-4 p-4 justify-center'>
      {
        players.map((val, ind) => (
          <ResultCard title={val} data={scores[val]} key={ind} isWinner={scores[val].score === Math.max(...scoreValues)}/>
        ))
      }
      </div>
      <Link href={'/'} className='bg-blue-100 rounded-md p-2 text-blue-700 font-medium'>Home</Link>
    </div>
  )
}

export default Page