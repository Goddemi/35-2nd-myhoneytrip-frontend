import React, { useState } from 'react';
import styled from 'styled-components';
import Calendar from './Calendar';

const Date = () => {
  const [onewayDate, setOnewayDate] = useState('');
  const [dateRange, setDateRange] = useState([null, null]);
  const [startDate, endDate] = dateRange;

  return (
    <DateContainer>
      <DateBox>
        <i className="fa-regular fa-calendar"> </i>
        <Calendar
          setDateRange={setDateRange}
          startDate={startDate}
          endDate={endDate}
          patternChange={patternChange}
          onewayDate={onewayDate}
          setOnewayDate={setOnewayDate}
        />
      </DateBox>
    </DateContainer>
  );
};

export default Date;

const DateContainer = styled`
  position: relative;
`;

const DateBox = styled`
   ${props => props.theme.variableflexSet('row', 'space-between', 'center')};
   justify-content: space-between;
   width: 330px;
   padding: 14px;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;
 
   
  i {
    font-size: 20px;
    transform: translate(20px, -2px);
    z-index: 5;
    color: rgba(0, 0, 0, 0.7);
  }

  span:nth-child(3) {
    color: gray;
    font-size: 20px;
  }
`;
