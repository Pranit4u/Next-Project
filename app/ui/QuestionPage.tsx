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

const QuestionPage = ({ currentPlayer, setCurrentPlayer }: { currentPlayer: string, setCurrentPlayer: Dispatch<SetStateAction<string>> }) => {
  const [currQuestion, setCurrentQuestion] = useState<QuestionInterface>();
  const [currNumber, setCurrNumber] = useState<number>(1);
  const [timeup, setTimeup] = useState<boolean>(false);
  const [seletedOption, setSelectedOption] = useState<number>(0);
  const [timer, setTimer] = useState<number>(15);
  const [timePause, setTimePause] = useState<boolean>(false);

  const players = useAppSelector(state => state.players.value);
  const scores: ScoresInterface = useAppSelector(state => state.scores.value);

  const dispatch = useAppDispatch();

  const [playBegin, { stop: stopBegin }] = useSound('/play.mp3');
  const [playCorrect, { stop: stopCorrect }] = useSound('/correct.mp3');
  const [playWrong, { stop: stopWrong }] = useSound('/wrong.mp3');

  const router = useRouter();

  useEffect(() => {
    if (currNumber <= questionsData.length) {
      setCurrentQuestion(questionsData[currNumber - 1]);
      const playerIndex = currNumber % players.length - 1;
      setCurrentPlayer(players.at(playerIndex) ?? '');
      setSelectedOption(0);
      setTimer(15);
      setTimeup(false);
    } else {
      router.replace('/result');
    }
  }, [currNumber]);

  useEffect(() => {
    if (scores[currentPlayer]?.score === 10) {
      router.replace('/result');
    }
  }, [scores])

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

    if (currQuestion?.options[seletedOption - 1].correct) {
      dispatch(updateScores({
        player: currentPlayer,
        score: scores[currentPlayer].score + 1,
        correct: scores[currentPlayer].correct + 1,
        wrong: scores[currentPlayer].wrong,
        skipped: scores[currentPlayer].skipped,
      }));
    } else {
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

  const handleNextQuestion = () => {
    setCurrNumber(prev => prev + 1)
    if (currNumber < questionsData.length) {
      stopBegin();
      stopCorrect();
      stopWrong();
      playBegin();
    }
  }

  const handleOptionClick = (op: number) => {
    if (!timeup) {
      setSelectedOption(op);
      setTimeout(() => {
        if (currQuestion?.options[op - 1].correct) {
          stopBegin();
          stopCorrect();
          stopWrong();
          playCorrect();
        } else {
          stopBegin();
          stopCorrect();
          stopWrong();
          playWrong();
        }
        setTimeup(true);
        setTimer(0);
      }, 2000);
    }
  }

  return (
    <div className='relative w-2/3 p-4 border border-1 border-white rounded-md flex flex-col items-center'>
      <div className='bg-black w-full h-1/4 flex justify-center items-center text-white p-2 rounded-lg font-medium border border-1'
        style={{backgroundImage: 'linear-gradient(to right, black, #390F4E, black)'}}
      >
        {currQuestion?.question}
      </div>
      <div className='w-full h-3/4 flex flex-col gap-2 justify-end'>
        <div className='relative w-16 h-16 rounded-full text-white flex justify-center items-center font-bold text-lg cursor-pointer hover:bg-green-400'
          onClick={handleTimerClick}
          style={{backgroundImage: 'radial-gradient(circle , #001861, black)', boxShadow: '0px 0px 20px 8px #D4AF37'}}
        >
          <Timer setTimeup={setTimeup} timer={timer} setTimer={setTimer} timePause={timePause} />
          <div className='absolute -top-4 text-xs p-1 text-blue-600 bg-blue-100 rounded-sm z-10 shadow-md'>
            {currentPlayer}
          </div>
        </div>
        <div className='flex gap-2 h-1/4'>
          <button className={`relative w-1/2 h-full font-medium cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 aria-disabled:cursor-not-allowed`} onClick={() => handleOptionClick(1)} aria-disabled={timeup}
            style={{backgroundImage: `${!timeup ? 'linear-gradient(to right, black, #390F4E, black)' : currQuestion?.options[0].correct ? 'linear-gradient(to right, #013220, green, #013220)' : 'linear-gradient(to right, #4D0000, #B30000, #4D0000)'}`}}
          >
            {currQuestion?.options[0].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 1 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
          <button className={`relative w-1/2 h-full font-medium cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 aria-disabled:cursor-not-allowed`} onClick={() => handleOptionClick(2)} aria-disabled={timeup}
            style={{backgroundImage: `${!timeup ? 'linear-gradient(to right, black, #390F4E, black)' : currQuestion?.options[1].correct ? 'linear-gradient(to right, #013220, green, #013220)' : 'linear-gradient(to right, #4D0000, #B30000, #4D0000)'}`}}
            >
            {currQuestion?.options[1].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 2 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
        </div>
        <div className='flex gap-2 h-1/4'>
          <button className={`relative w-1/2 h-full font-medium cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 aria-disabled:cursor-not-allowed`} onClick={() => handleOptionClick(3)} aria-disabled={timeup}
            style={{backgroundImage: `${!timeup ? 'linear-gradient(to right, black, #390F4E, black)' : currQuestion?.options[2].correct ? 'linear-gradient(to right, #013220, green, #013220)' : 'linear-gradient(to right, #4D0000, #B30000, #4D0000)'}`}}
            >
            {currQuestion?.options[2].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 3 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
          <button className={`relative w-1/2 h-full font-medium cursor-pointer flex justify-center items-center text-white p-2 rounded-md border border-1 aria-disabled:cursor-not-allowed`} onClick={() => handleOptionClick(4)} aria-disabled={timeup}
            style={{backgroundImage: `${!timeup ? 'linear-gradient(to right, black, #390F4E, black)' : currQuestion?.options[3].correct ? 'linear-gradient(to right, #013220, green, #013220)' : 'linear-gradient(to right, #4D0000, #B30000, #4D0000)'}`}}
            >
            {currQuestion?.options[3].text}
            <CIcon className={`absolute w-6 h-6 rounded-full p-1 -top-1 -left-1 bg-blue-100 text-blue-600 text-xs ${seletedOption === 4 ? '' : 'hidden'}`} icon={cilLockLocked} />
          </button>
        </div>
        <CIcon onClick={handleNextQuestion} className='h-8 w-8 text-blue-600 bg-blue-100 absolute top-0 right-0 mt-2 mr-2 rounded-full z-10 shadow-md cursor-pointer' icon={cilArrowCircleRight} />
      </div>
    </div>
  )
}

export default QuestionPage