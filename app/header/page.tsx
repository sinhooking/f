'use client'

// import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react';
import styled, { keyframes } from 'styled-components';

import { FlexBox, FlexCenter } from '@/components/styles/FlexBox';
import Menu from '@/components/menu/Menu';
import Imageslider from '@/components/dom/Imageslider';
import TextList from '@/components/dom/TextList';
// const FlexBox = dynamic(() => import('@/components/styles/FlexBox').then((mod) => mod.FlexBox), { ssr: false })
// const FlexCenter = dynamic(() => import('@/components/styles/FlexBox').then((mod) => mod.FlexCenter), { ssr: false })


const TextContainer = styled.div`
  display: flex;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  background-color: var(--primary);
`

const slider = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(100%);
  }
`;

const sliderReverse = keyframes`
from {
  transform: translateX(0%);
}
to {
  transform: translateX(-100%);
}
`;

interface Option { isReverse: boolean };
const Text = styled.div<Option>`
 animation: ${(props) => (props.isReverse === true ? sliderReverse : slider)} 60s linear infinite;
  will-change: transform;
  font-size: 2.3125vw;
  color: var(--text-primary-reverse);
  text-transform: uppercase;
  letter-spacing: -0.0390625vw;
  font-family: cursive;
`


export const ImageContainer = styled.div`
  width: 53.125vw;
  height: 31.25vw;
`

export default function Page() {
  // const [isReadySlide, setisReadySlide] = useState(false);
  // // useEffect(() => {
  // //   setTimeout(() => {
  // //     setisReadySlide(true);
  // //   }, 500)

  // //   return () => {
  // //     setisReadySlide(false);
  // //   }
  // // }, []);

  // const onClick = () => {
  //   console.log('@@')
  //   setisReadySlide(!isReadySlide);
  // }
  
  const [isDark, setIsDark] = useState(
    typeof window !== 'undefined' ? (localStorage?.getItem("theme") == "dark" ? true : false) : false
  );

  useEffect(() => {
    localStorage?.getItem("theme") == "dark"
      ? document.documentElement.classList.add("dark")
      : document.documentElement.classList.remove("dark");
  });

  useEffect(() => {
    setIsDark(localStorage?.getItem("theme") == "dark" ? true : false)
  }, [])

  useEffect(() => {
    localStorage.setItem("theme", isDark ? "dark" : "light");
    const classList = document.documentElement.classList;

    isDark ? classList.add("dark") : classList.remove("dark");
    !isDark ? classList.add("light") : classList.remove("light");
  }, [isDark])

  const [isReadySlide, setisReadySlide] = useState(false);
  const onClick = () => setisReadySlide(!isReadySlide);

  return (
    <>
    <FlexBox style={{ justifyContent: 'flex-end'}}>
        <div>
        <label className="relative inline-flex items-center cursor-pointer">
        <input
          type="checkbox"
          className="sr-only peer"
          onClick={() => {
            setIsDark(!isDark);
          }}
          // defaultChecked={isDark}
          checked={isDark}
        />
        <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>
        </div>
      
      <Menu isOpen={isReadySlide} onClick={onClick} />
      </FlexBox>
      { isReadySlide}
     <div style={{
      opacity: isReadySlide ? 1 : 0,
      transition: 'opacity 0.3s ease-out; '
      }}>
        <TextContainer>
          <Text isReverse={true}>We're your fave, fashioning new trends and pioneering digital experiences you'll love.</Text>
          <Text isReverse={true}>We're your fave, fashioning new trends and pioneering digital experiences you'll love.</Text>
          <Text isReverse={true}>We're your fave, fashioning new trends and pioneering digital experiences you'll love.</Text>
        </TextContainer>
        <FlexCenter style={{ height: 'calc(100vh - 150px)' }}>
          <FlexBox>
            <Imageslider isReadySlide={isReadySlide} />
            <TextList isReadySlide={isReadySlide} />
          </FlexBox>
        </FlexCenter>
        <TextContainer>
          <Text isReverse={false}>We're your fave, fashioning new trends and pioneering digital experiences you'll love.</Text>
          <Text isReverse={false}>We're your fave, fashioning new trends and pioneering digital experiences you'll love.</Text>
          <Text isReverse={false}>We're your fave, fashioning new trends and pioneering digital experiences you'll love.</Text>
        </TextContainer>
      </div>

    </>
  )
}
