'use client'

import { cilArrowRight } from '@coreui/icons';
import CIcon from '@coreui/icons-react';

export default function Page() {
  return (
    <div className="min-h-screen bg-blue-300 flex justify-center items-center " >
      <div className="border border-2 p-8 rounded-md flex flex-col gap-4">
        <input className='rounded-md p-1 px-3 text-center focus-visible:outline-blue-500'/>
        <button className='flex p-1 px-3 justify-between items-center rounded-md bg-blue-800 text-white hover:bg-blue-900 focus-visible:outline-2 focus-visible:outline-offset-2 active:bg-blue-700 aria-disabled:cursor-not-allowed aria-disabled:opacity-50' aria-disabled={false}>
          Join<CIcon className='h-5 w-5' icon={cilArrowRight} />
        </button>
      </div>
    </div>
  );
}
