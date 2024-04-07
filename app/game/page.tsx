'use client'

import { useState } from "react";
import Lifeline from "../ui/Lifeline";
import QuestionPage from "../ui/QuestionPage";
import Scoreboard from "../ui/Scoreboard";

export default function Page() {
  const [currentPlayer, setCurrentPlayer] = useState<string>('');
  return (
    <div style={{backgroundImage: `url('https://i.ytimg.com/vi/yQbJRGs0fy8/maxresdefault.jpg')`}}  className="h-screen">
      <div className="h-3/4 flex">
        <QuestionPage currentPlayer={currentPlayer} setCurrentPlayer={setCurrentPlayer} />
        <Scoreboard />
      </div>
      <div className="h-1/4 border border-1 border-white rounded-md">
        <Lifeline currentPlayer={currentPlayer} />
      </div>
    </div>
  )
}