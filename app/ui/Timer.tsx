'use client'

import { Dispatch, SetStateAction, useEffect, useState } from "react";

export default function Timer({ setTimeup, timer, setTimer, timePause }: { setTimeup: any, timer: number, setTimer: Dispatch<SetStateAction<number>>, timePause: boolean}) {

  useEffect(() => {
    if (timePause) return;
    if (!timer) return setTimeup(true);
    const interval = setInterval(() => {
      setTimer((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [timer, setTimeup, timePause]);

  return timer;
}
