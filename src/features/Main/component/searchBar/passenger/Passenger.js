import React, { useState } from 'react';
import styled from 'styled-components';
import PassengerBox from './PassengerBox';

const Passenger = () => {
  const [passengerOpen, setPassengerOpen] = useState(false);
  const handlePassengerOpen = () => setPassengerOpen(true);
  const handlePassengerClose = () => setPassengerOpen(false);
  const [passengerInfo, setPassengerInfo] = useState({
    count: 1,
    seat: '일반석',
  });
  const { count, seat } = passengerInfo;

  return (
    <PassengerContainer>
      <PassengerArea onClick={handlePassengerOpen}>
        <div>
          <i className="fa-solid fa-user-large"> </i>
          <span>
            승객 {count} 명, {seat}
          </span>
        </div>
        <i className="fa-solid fa-angle-down"></i>
      </PassengerArea>
      <PassengerBox
        open={passengerOpen}
        onClose={handlePassengerClose}
        count={count}
        passengerInfo={passengerInfo}
        setPassengerInfo={setPassengerInfo}
      ></PassengerBox>
    </PassengerContainer>
  );
};

export default Passenger;

const PassengerContainer = styled.div`
  position: relative;
`;

const PassengerArea = styled`
  ${props => props.theme.variableflexSet('row', 'space-between', 'center')};
  justify-content: space-between;
  width: 320px;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
  
  i {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }

  div {
    font-weight: bold;
    transform: translateY(-1px);
  }
`;
