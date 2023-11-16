import styled from 'styled-components';

export const FlexBox = styled.div`
  display: flex;
`;

export const BoxSlide = styled.div`
  position: relative;
  width: 200px;
  height: 50px;
  margin-left: 4px;
`;

interface FlexBoxProps {
  isReadySlide: boolean;
  isDie: boolean;
}

export const BoxSlideItem = styled.p<FlexBoxProps>`
  position: absolute;
  transition: transform 0.5s;
  transform: translateY(${(props) => (props.isReadySlide ? 0 : props.isDie ? '50px' : '-50px')});
`;

export const UnderScore = styled.span`
    display: inline-block;
    width: 40px;
    height: 16px;
    border-bottom: 1px solid var(--black-333);
    margin-left: 4px;
    margin-bottom: 2px;
`;

export const FlexCenter = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`;