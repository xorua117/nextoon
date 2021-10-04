import styled from 'styled-components';
import { FaAngleLeft, FaAngleRight } from 'react-icons/fa';

import Slider from './Slider';
import useSlider from '../../hooks/useSlider';

function RowContainer({ data }) {
  const { pageNumber, pageRef, raisePageNumber, lowerPageNumber } = useSlider();

  let datas = data.slice(pageNumber * 6 - 6, pageNumber * 6);

  return (
    <RowContainerBlock>
      <HandlePrev>
        {pageNumber !== 1 && <LeftAngle onClick={lowerPageNumber} />}
      </HandlePrev>
      <PaginationIndicator ref={pageRef}>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
        <li></li>
      </PaginationIndicator>
      <Slider datas={datas} />
      <HandleNext>
        <RightAngle onClick={raisePageNumber} />
      </HandleNext>
    </RowContainerBlock>
  );
}

const RowContainerBlock = styled.div`
  position: relative;
  display: flex;
`;

const HandlePrev = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  z-index: 20;
`;

const HandleNext = styled.span`
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
  z-index: 20;
`;

const LeftAngle = styled(FaAngleLeft)`
  width: 40px;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const RightAngle = styled(FaAngleRight)`
  width: 40px;
  height: 60px;

  &:hover {
    cursor: pointer;
  }
`;

const PaginationIndicator = styled.ul`
  position: absolute;
  top: 0px;
  right: 62px;
  display: flex;
  margin-top: -12px;
  padding: 0;
  list-style-type: none;

  li {
    width: 12px;
    height: 2px;
    margin-left: 1px;
    background: #4d4d4d;
    // background-color: #aaa;
  }
`;

export default RowContainer;
