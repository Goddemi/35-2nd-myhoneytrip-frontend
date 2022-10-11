import React, { useState } from 'react';
import styled from 'styled-components';
import { PLACES } from '../../../data/departureDestination';
import DestinationBox from './DestinationBox';

const Schedule = () => {
  const [destinationOpen, setDestinationOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(PLACES[1]);

  const handleDestinationOpen = () => {
    setDestinationOpen(true);
  };

  const handleDestinationClose = value => {
    setDestinationOpen(false);
    setSelectedValue(value);
  };

  return (
    <ScheduleContainer>
      <ScheduleBox onClick={handleDestinationOpen}>
        <span>서울 (SEL) </span>
        <i className="fa-solid fa-arrows-rotate"></i>
        <span>{selectedValue}</span>
      </ScheduleBox>
      <DestinationBox
        PLACES={PLACES}
        selectedValue={selectedValue}
        open={destinationOpen}
        onClose={handleDestinationClose}
      />
    </ScheduleContainer>
  );
};

export default Schedule;

const ScheduleContainer = styled.div`
  position: relative;
`;

const ScheduleBox = styled.div`
  ${props => props.theme.variableflexSet('row', 'space-between', 'center')};
  width: 450px;
  padding: 20px;
  background-color: white;
  border-radius: 3px;
  cursor: pointer;

  i {
    font-size: 18px;
    color: rgba(0, 0, 0, 0.7);
  }
`;
