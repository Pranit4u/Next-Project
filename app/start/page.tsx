'use client'
import { useRouter } from 'next/navigation'
import React, { useEffect } from 'react'
import styles from '@/app/start/page.module.css'
// @ts-ignore
import useSound from 'use-sound'

const Page = () => {
  const router = useRouter();
  const [playIntro] = useSound('/intro.mp3');

  useEffect(() => {
    // playIntro();
  }, [playIntro]);

  const startGame = () => {
    router.replace('/game');
  }



  return (
    <div style={{ backgroundImage: `url('https://i.ytimg.com/vi/yQbJRGs0fy8/maxresdefault.jpg')` }} className='h-screen flex justify-center items-center'>
      <div className={styles.logo} onClick={startGame}>
        <div className={styles.round}>
          <div className={styles.rings}>
            {Array.from({ length: 18 }).map((_, ind) => (
              <div key={ind} className={styles.rin} style={{ transform: `rotate(${ind * 10}deg)`, border: `2px solid ${ind % 2 ? '#D4AF37' : '#5588cc'}` }}>
              </div>
            ))}
            <div className={styles.border}></div>
          </div>
          {Array.from({ length: 6 }).map((_, ind) => (
            <div className={styles.rs} style={{ transform: `rotate(${ind * 60}deg)` }}>&#8377;</div>
          ))}
        </div>
        <div className={styles.mainHeading}>Crorepati</div>
      </div>
    </div>
  )
}

export default Page