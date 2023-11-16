import React, { useEffect, useState } from 'react';
import styled  from 'styled-components';
interface FlexBoxProps {
    isReadySlide: boolean;
  }
  export const BoxSlideItem = styled.p<FlexBoxProps>`
    transition: transform 1s;
    transform: translateY(${(props) => (props.isReadySlide ? 0 : '50px')});
    height: 100%;
  `;
  
  export const BoxSlideWrapItem = styled.li`
    overflow: hidden;
    color: var(--primary);
    font-size: 2.8125vw;
  
    &:hover {
      color: var(--text-primary);
    }
  `;

const TextList = ({ isReadySlide}) => {
    const [localLoad, setlocalLoad] = useState(false);
    useEffect(() => {
        setlocalLoad(isReadySlide);
        return () => {
            setlocalLoad(false);
        }
    }, [isReadySlide])

    return (
        <div style={{ marginLeft: 40 }}>
        <ul>
          <BoxSlideWrapItem><a href=""><BoxSlideItem isReadySlide={localLoad}>HOME</BoxSlideItem></a></BoxSlideWrapItem>
          <BoxSlideWrapItem><a href=""><BoxSlideItem isReadySlide={localLoad}>ABOUT</BoxSlideItem></a></BoxSlideWrapItem>
          <BoxSlideWrapItem><a href=""><BoxSlideItem isReadySlide={localLoad}>PROJECTS</BoxSlideItem></a></BoxSlideWrapItem>
          <BoxSlideWrapItem><a href=""><BoxSlideItem isReadySlide={localLoad}>CONTACT</BoxSlideItem></a></BoxSlideWrapItem>
        </ul>
      </div>
    );
}

export default TextList;
