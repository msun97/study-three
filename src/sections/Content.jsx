import Logo from '@/components/Logo'
import React from 'react'

const Content = () => {
  return (
    <>
        <div className="loading absolute w-full h-full bg-black flex justify-center align-center items-center transition-[opacity 0.5s]">
            <div className='loading-logo w-1/3 max-w-[200px] opacity-1'>
              <Logo />
            </div>
        </div> 
        <div className="content">
          <div className='header'>
            <div className='header-logo'>
              <Logo />
            </div>
          </div>
          <div className='section-wrap'>
            <div className='scroll'>
              <button className='scroll-btn'>SCROLL</button>
              <div className='scroll-fillCircle'></div>
              <svg className='scroll-circle' xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient id='spinner-gradient' gradientUnits='userSpaceOnUse'>
                    <stop offset='0%' stopColor='currentColor' />
                    <stop offset='100%' stopColor='currentColor' />
                  </linearGradient>
                </defs>
                <circle cx='100' cy='100' r='98' fill='none' stroke="url(#spinner-gradient)" strokeWidth='2' />
              </svg>
            </div>
            <canvas id='canvas'></canvas>
            <div className='intro'>
              <div className='intro-inner'>
                
              </div>
            </div>
            <div className='subtitle'></div>
            <div className='section section1'></div>
            <div className='section section2'></div>
            <div className='section section3'></div>
            <div className='section section4'></div>
            <div className='section section5'></div>
            <div className='section section6'></div>
          </div>
          <div className='footer'></div>
        </div>
    </>
  )
}

export default Content