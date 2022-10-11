import styled from 'styled-components';
import React, { useState } from 'react';
import { dataFetch } from '../../api/search';
import Schedule from './schedule/Schedule';
import Date from './date/Date';
import Passenger from './passenger/Passenger';

const SearchBar = () => {
  return (
    <SearchBarContainer>
      <Schedule />
      <Date />
      <Passenger />
      <SearchBtn onClick={dataFetch}>검색</SearchBtn>
    </SearchBarContainer>
  );
};

export default SearchBar;

const SearchBarContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  div {
    margin-right: 3px;
  }
`;

const SearchBtn = styled.button`
  width: 80px;
  color: white;
  background-color: ${({ theme }) => theme.style.pink};
  border: none;
  border-radius: 2px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
`;
