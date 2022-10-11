import React, { useState } from 'react';

import SearchHeader from './component/searchHeader/SearchHeader';
import SearchBar from './component/searchBar/SearchBar';
import Carousel from './component/carousel/Carousel';
import RecentSearch from './component/recentSearch/RecentSearch';
import Recommend from './component/recommend/Recommend';

import styled from 'styled-components';

const Main = () => {
  const [patternChange, setPatternChange] = useState(false);

  const savedData = JSON.parse(localStorage.getItem('recentData'));
  const [searchArray, setSearchArray] = useState(savedData ? savedData : []);

  return (
    <Container>
      <HeaderContainer>
        <NavSpace></NavSpace>
        <HeaderBox>
          <SearchHeader
            patternChange={patternChange}
            setPatternChange={setPatternChange}
          />
          <SearchBar />
        </HeaderBox>
      </HeaderContainer>
      <BodyContainer>
        {savedData ? <RecentSearch></RecentSearch> : ''}
        <Carousel />
        <Recommend></Recommend>
      </BodyContainer>
    </Container>
  );
};

const Container = styled.div``;

const HeaderContainer = styled.div`
  position: relative;
  max-width: 100%;
  height: 275px;
  margin: auto;
  padding: 40px;
  background: center/cover no-repeat url('/images/airplane.jpg');
`;

const NavSpace = styled.div`
  height: 70px;
`;

const HeaderBox = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const BodyContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default Main;
