'use client'

import React, { Dispatch, SetStateAction, useEffect, useState } from 'react'
import CIcon from '@coreui/icons-react'
import { cilArrowCircleRight, cilLockLocked } from '@coreui/icons'

import { QuestionInterface, ScoresInterface } from '../lib/definitions'
import Timer from './Timer'
import { questionsData } from '../lib/data'
import { useAppDispatch, useAppSelector } from '../lib/hooks'
import { updateScores } from '../lib/features/scores/scoresSlice'
import { useRouter } from 'next/navigation'
// @ts-ignore
import useSound from 'use-sound'

const QuestionPage = ({ currentPlayer, setCurrentPlayer } : {currentPlayer: string, setCurrentPlayer: Dispatch<SetStateAction<string>>}) => {
  const [currQuestion, setCurrentQuestion] = useState<QuestionInterface>();
  const [currNumber, setCurrNumber] = useState<number>(1);
  const [timeup, setTimeup] = useState<boolean>(false);
  const [seletedOption, setSelectedOption] = useState<number>(0);
  const [timer, setTimer] = useState<number>(15);
  const [timePause, setTimePause] = useState<boolean>(false);

  const players = useAppSelector(state => state.players.value);
  const scores: ScoresInterface = useAppSelector(state => state.scores.value);

  const dispatch = useAppDispatch();

  const router = useRouter();

  const [correct] = useSound('/correct.mp3');
  const [wrong] = useSound('/wrong.mp3');
  const [playBegin] = useSound('/play.mp3');

  useEffect(() => {
    if (currNumber <= questionsData.length) {
      setCurrentQuestion(questionsData[currNumber - 1]);
      const playerIndex = currNumber % players.length - 1;
      setCurrentPlayer(players.at(playerIndex) ?? '');
      setSelectedOption(0);
      setTimer(15);
      setTimeup(false);
      // playBegin();
    } else {
      router.replace('/result');
    }
  }, [currNumber]);

  useEffect(() => {
    if (!timeup || !seletedOption) {
      return;
    }
    if (!seletedOption) {
      dispatch(updateScores({
        player: currentPlayer,
        score: scores[currentPlayer].score,
        correct: scores[currentPlayer].correct,
        wrong: scores[currentPlayer].wrong,
        skipped: scores[currentPlayer].skipped + 1,
      }));
      return;
    }

    if (currQuestion?.options[seletedOption-1].correct) {
      // correct();
      dispatch(updateScores({
        player: currentPlayer,
        score: scores[currentPlayer].score + 1,
        correct: scores[currentPlayer].correct + 1,
        wrong: scores[currentPlayer].wrong,
        skipped: scores[currentPlayer].skipped,
      }));
    } else {
      // wrong();
      dispatch(updateScores({
        player: currentPlayer,
        score: Math.max(scores[currentPlayer].score - 1, 0),
        correct: scores[currentPlayer].correct,
        wrong: scores[currentPlayer].wrong + 1,
        skipped: scores[currentPlayer].skipped,
      }));
    }
  }, [timeup]);

  const handleTimerClick = () => {
    setTimePause(prev => !prev);
  }

  return (
    <div className='relative w-2/3 p-4 border border-1 border-white rounded-md flex flex-col items-center'>
      <div className='bg-black w-full h-1/4 flex justify-center items-center text-white p-2 rounded-lg font-medium border border-1'>
        {currQuestion?.question}
      </div>
      <div className='w-full h-3/4 flex flex-col gap-2 justify-end'>
        <div className='relative bg-green-300 w-16 h-16 rounded-full flex justify-center items-center font-bold text-lg cursor-pointer hover:bg-green-400' onClick={handleTimerClick}>
          <Timer setTimeup={setTimeup} timer={timer} setTimer={setTimer} timePause={timePause} />
          <div className='absolute -top-4 text-xs p-1 text-blue-600 bg-blue-100 rounded-sm z-10 shadow-md'>
            {currentPlayer}
          </div>
        </div>
        <div className='flex gap-2 h-1/4'>
          <button className={`relative w-1/2 h-full cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 ${!timeup ? 'bg-black hover:bg-gray-700' : currQuestion?.options[0].correct ? 'bg-green-500' : 'bg-red-500'} aria-disabled:cursor-not-allowed`} onClick={timeup ? ()=>{} : () => setSelectedOption(1)} aria-disabled={timeup}>
            {currQuestion?.options[0].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 1 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
          <button className={`relative w-1/2 h-full cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 ${!timeup ? 'bg-black hover:bg-gray-700' : currQuestion?.options[1].correct ? 'bg-green-500' : 'bg-red-500'} aria-disabled:cursor-not-allowed`} onClick={timeup ? ()=>{} : () => setSelectedOption(2)} aria-disabled={timeup}>
            {currQuestion?.options[1].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 2 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
        </div>
        <div className='flex gap-2 h-1/4'>
          <button className={`relative w-1/2 h-full cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 ${!timeup ? 'bg-black hover:bg-gray-700' : currQuestion?.options[2].correct ? 'bg-green-500' : 'bg-red-500'} aria-disabled:cursor-not-allowed`} onClick={timeup ? ()=>{} : () => setSelectedOption(3)} aria-disabled={timeup}>
            {currQuestion?.options[2].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 3 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
          <button className={`relative w-1/2 h-full cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 ${!timeup ? 'bg-black hover:bg-gray-700' : currQuestion?.options[3].correct ? 'bg-green-500' : 'bg-red-500'} aria-disabled:cursor-not-allowed`} onClick={timeup ? ()=>{} : () => setSelectedOption(4)} aria-disabled={timeup}>
            {currQuestion?.options[3].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 4 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
        </div>
        <CIcon onClick={() => setCurrNumber(prev => prev + 1)} className='h-8 w-8 text-blue-600 bg-blue-100 absolute top-0 right-0 mt-2 mr-2 rounded-full z-10 shadow-md cursor-pointer' icon={cilArrowCircleRight} />
      </div>
    </div>
  )
}

export default QuestionPage