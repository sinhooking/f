'use client'

import Menu from '@/components/menu/Menu'
import dynamic from 'next/dynamic'
import { useEffect, useState } from 'react'

const FlexBox = dynamic(() => import('@/components/styles/FlexBox').then((mod) => mod.FlexBox), { ssr: false })
const BoxSlide = dynamic(() => import('@/components/styles/FlexBox').then((mod) => mod.BoxSlide), { ssr: false })
const BoxSlideItem = dynamic(() => import('@/components/styles/FlexBox').then((mod) => mod.BoxSlideItem), { ssr: false })
const UnderScore = dynamic(() => import('@/components/styles/FlexBox').then((mod) => mod.UnderScore), { ssr: false })
const FlexCenter = dynamic(() => import('@/components/styles/FlexBox').then((mod) => mod.FlexCenter), { ssr: false })

export default function Page() {
  const [num, setNum] = useState(0);
  const [developers, setDevelopers] = useState([
    'PHP Developer',
    'Python Developer',
    'Node.Js Developer',
    'React Developer',
    'Front-end Developer',
    'Interactive Developer',
    'ShinHoo Kim'
  ]);

  const [currentPercentage, setCurrentPercentage] = useState(0);
  useEffect(() => {
    let animationFrameId;

    const updatePercentage = () => {
      const targetPercentage = (num + 1) / developers.length * 100;

      if (currentPercentage < targetPercentage) {
        setCurrentPercentage((prevPercentage) => {
          const newPercentage = prevPercentage + 1;
          return newPercentage;
        });
        animationFrameId = requestAnimationFrame(updatePercentage);
      }
    };

    // Start the animation
    animationFrameId = requestAnimationFrame(updatePercentage);

    // Clean up function
    return () => cancelAnimationFrame(animationFrameId);
  }, [num, currentPercentage]);


  useEffect(() => {
    if (developers.length - 1 > num) {

      setTimeout(() => {
        setNum(num + 1);
      }, 1000);
    }
  }, [developers.length, num])

  useEffect(() => {
    setNum(0)

    return () => {
      setNum(0)
    }
  }, [])

  return (
    <>
      <style></style>
      <FlexCenter style={{ height: '100vh' }}>
        <FlexBox>
          <div>
          {/* (nums.indexOf(num) + 1) / nums.length * 100; */}
            ({currentPercentage}%){" "}
            {/* {(num + 1) / developers.length * 100} */}
            <strong>Hi I'm</strong><UnderScore />
          </div>
          <div style={{
            overflow: 'hidden'
          }}>
            <BoxSlide>
              {
                developers.map((skilName, index) => <BoxSlideItem key={skilName + index} isDie={num < index} isReadySlide={num === index}>{skilName}</BoxSlideItem>)
              }
            </BoxSlide>
          </div>
        </FlexBox>
      </FlexCenter>
    </>
  )
}
