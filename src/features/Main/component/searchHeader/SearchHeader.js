import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';
import { changePattern } from '../../../../store/store';

const SearchHeader = () => {
  let pattern = useSelector(state => state.pattern);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const goToCheck = () => {
    navigate('/checkreservation');
  };

  return (
    <SearchHeaderBox>
      <Round
        changePattern={pattern}
        onClick={() => {
          dispatch(changePattern(pattern));
        }}
      >
        왕복
      </Round>
      <OneWay
        changePattern={pattern}
        onClick={() => {
          dispatch(changePattern(pattern));
        }}
      >
        편도
      </OneWay>
      <ReservationList>
        <span onClick={goToCheck}>항공권 예약내역 </span>
        <span>
          <i className="fa-solid fa-circle-chevron-right"></i>
        </span>
      </ReservationList>
    </SearchHeaderBox>
  );
};

export default SearchHeader;

const SearchHeaderBox = styled.div`
  ${props => props.theme.variableflexSet('row', 'space-between')};
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

const Round = styled.span`
  padding: 10px 15px;
  margin: 20px 5px;
  border-bottom: 3px solid
    ${props => (props.changePattern ? 'transparent' : 'white')};
  color: ${props => (props.changePattern ? '#DCDCDC' : 'white')};
  cursor: pointer;
`;

const OneWay = styled(Round)`
  margin-left: 5px;
  border-bottom: 3px solid
    ${props => (!props.changePattern ? 'transparent' : 'white')};
  color: ${props => (!props.changePattern ? '#DCDCDC' : 'white')};
`;

const ReservationList = styled.div`
  cursor: pointer;
`;
