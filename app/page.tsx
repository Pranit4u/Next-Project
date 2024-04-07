'use client'

import { cilArrowRight, cilCart, cilClone, cilTrash } from '@coreui/icons';
import CIcon from '@coreui/icons-react';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from './lib/hooks';
import { addPlayers } from './lib/features/players/playersSlice';
import { useRouter } from 'next/navigation';
import { LifeInterface, ScoresInterface } from './lib/definitions';
import { initScores } from './lib/features/scores/scoresSlice';
import { initLife } from './lib/features/life/lifeSlice';

export default function Page() {
  const [players, setPlayers] = useState<string[]>(['Auser1', 'Buser2', 'Cuser3']);
  const [selectedPlayer, setSelectedPlayer] = useState<string>('');
  const [player, setPlayer] = useState<string>('');
  const [joining, setJoining] = useState<boolean>(false);
  
  const dispatch = useAppDispatch();
  // const reduxPlayers = useAppSelector(state => state.players.value);
  // const reduxRoom = useAppSelector(state => state.room.value);

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPlayer(e.target.value);
  }

  const addPlayer = () => {
    if (!player) {
      return;
    }
    const isNotValid = players.some(str => str[0].toLowerCase() === player[0].toLowerCase());
    if (isNotValid) {
      alert('Player inital already exist.\nTry using other initails.')
      return;
    }
    setPlayers(prev => {
      let updatedState = [...prev, player];
      return updatedState;
    });
  }
  
  const handleSelectPlayer = (val: string) => {
    if (selectedPlayer === val) {
      setSelectedPlayer('');
      return;
    }
    setSelectedPlayer(val);
  }

  const removePlayer = (val: string) => {
    setPlayers(prev => {
      const updatedState = prev.filter(p => p !== val);
      return updatedState;
    });
    setSelectedPlayer('');
  }

  const joinGame = () => {
    if (players.length) {
      setJoining(true);
      dispatch(addPlayers(players));
      const scores: ScoresInterface = {};
      const life: LifeInterface = {};
      players.forEach(ele => {
        scores[ele] = {
          score: 0,
          analytics: {},
          correct: 0,
          wrong: 0,
          skipped: 0,
        };
        life[ele] = {
          life1: true,
          life2: true,
          life3: true,
          life4: true,
        }
      });
      dispatch(initScores(scores));
      dispatch(initLife(life));
      router.push('/start');
    }
  }

  return (
    <div className="min-h-screen bg-blue-200 flex justify-center items-center relative" >
      <div className="border border-2 p-8 rounded-md flex flex-col gap-4">
        <div>
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="player"
          >
            Player
          </label>
          <div className='flex items-center rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-500'>
            <input style={{textTransform: 'uppercase'}} type='text' className='rounded-md p-1 px-3 text-center focus-visible:outline-none text-uppercase' id='player' name='player' value={player} onChange={handleChange} />
            <CIcon className='h-8 w-8 p-2 rounded-sm cursor-pointer hover:bg-blue-100 active:bg-blue-200' icon={cilCart} onClick={addPlayer} />
          </div>
        </div>
        {/* <div>
          <label
            className="block text-xs font-medium text-gray-900"
            htmlFor="room"
          >
            Room
          </label>
          <div className='flex items-center rounded-md bg-white focus-within:ring-2 focus-within:ring-blue-500'>
            <input className='rounded-md p-1 px-3 text-center focus-visible:outline-none' id='room' name='room' value={gameInfo.room} onChange={handleChange} />
            <CIcon className='h-8 w-8 p-2 rounded-sm cursor-pointer hover:bg-blue-100 active:bg-blue-200' icon={cilClone} />
          </div>
        </div> */}
        <button className='flex p-1 px-3 justify-between items-center rounded-md bg-blue-800 text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-blue-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50' aria-disabled={joining}  onClick={joinGame}>
          Join<CIcon className='h-5 w-5' icon={cilArrowRight} />
        </button>
      </div>
      <div className='w-64 absolute top-0 right-0 p-4 m-8 flex flex-col gap-4 justify-center text-center rounded-md bg-white'>
        <button className='rounded-md bg-gray-200 py-2 font-medium'>
          Joined
        </button>
        <div>
          {players.length ?
            players.map((val, ind) => (
              <div key={ind} className='flex items-center relative'>
                <CIcon 
                  className={`h-8 w-8 bg-red-200 rounded-md cursor-pointer p-2 ${selectedPlayer === val ? '' : 'hidden'}`} icon={cilTrash}
                  onClick={() => removePlayer(val)}
                />
                <div
                  className='w-full rounded-md bg-blue-100 my-1 py-1 cursor-pointer'
                  onClick={() => handleSelectPlayer(val)}
                >
                  {val}
                </div>
              </div>
            ))
            : 'No players yet!'}
        </div>
      </div>
    </div>
  );
}
