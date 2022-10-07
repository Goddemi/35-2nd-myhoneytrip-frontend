import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import Destination from './component/Destination/Destination';
import Calendar from './component/Calendar/Calendar';
import Passenger from './component/Passenger/Passenger';

import Carousel from './component/Carousel/Carousel';
import RecentSearch from './component/RecentSearch/RecentSearch';
import Recommend from './component/Recommend/Recommend';

import styled from 'styled-components';

const PLACES = ['🏖 하와이', '🏝 발리', '☀️ 몰디브', '🌊 칸쿤'];
const DEPARTURE_LOCATION = 'Seoul';

const Main = () => {
  const navigate = useNavigate();

  const [patternChange, setPatternChange] = useState(false);
  const handlePatternChange = () => {
    setPatternChange(!patternChange);
  };

  const [destinationOpen, setDestinationOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState(PLACES[1]);

  const handleDestinationOpen = () => {
    setDestinationOpen(true);
  };

  const handleDestinationClose = value => {
    setDestinationOpen(false);
    setSelectedValue(value);
  };

  const [dateRange, setDateRange] = useState([null, null]);
  const [onewayDate, setOnewayDate] = useState('');
  const [startDate, endDate] = dateRange;

  const [passengerOpen, setPassengerOpen] = useState(false);
  const handlePassengerOpen = () => setPassengerOpen(true);
  const handlePassengerClose = () => setPassengerOpen(false);
  const [passengerInfo, setPassengerInfo] = useState({
    count: 1,
    seat: '일반석',
  });
  const { count, seat } = passengerInfo;

  const dataFetch = () => {
    const destinationMatch = {
      '☀️ 몰디브': 'Maldive',
      '🏝 발리': 'Bali',
      '🏖 하와이': 'Hawaii',
      '🌊 칸쿤': 'Cancun',
    };
    const destinationLocation = destinationMatch[selectedValue];

    const loadingDataMatch = {
      '☀️ 몰디브': ['MLE', '몰디브'],
      '🏝 발리': ['DPS', '발리'],
      '🏖 하와이': ['HNL', '하와이'],
      '🌊 칸쿤': ['CUN', '칸쿤'],
    };

    const loadingLocationCode = loadingDataMatch[selectedValue];

    const dateMatch = {
      ...(patternChange
        ? {
            departureDate: onewayDate.getDate(),
            returnDate: 0,
          }
        : {
            departureDate: startDate.getDate(),
            returnDate: endDate.getDate(),
          }),
    };

    const localstorageData = {
      destination: selectedValue,
      departureDate: patternChange ? onewayDate : startDate,
      returnDate: patternChange ? undefined : endDate,
      passengerCount: count,
    };

    const newSearchArray = [...searchArray, localstorageData];
    setSearchArray(newSearchArray);
    localStorage.setItem('recentData', JSON.stringify(newSearchArray));

    navigate(
      `/reservation?departure_name=${DEPARTURE_LOCATION}&destination_name=${destinationLocation}&departure_date=${dateMatch.departureDate}&return_date=${dateMatch.returnDate}&passenger=${count}`,
      {
        state: {
          arrive_name: loadingLocationCode[1],
          arrive_name_code: loadingLocationCode[0],
          departure_day: dateMatch.departureDate,
          arrive_day: dateMatch.returnDate,
        },
      }
    );
  };

  const savedData = JSON.parse(localStorage.getItem('recentData'));
  const [searchArray, setSearchArray] = useState(savedData ? savedData : []);

  const goToCheck = () => {
    navigate('/checkreservation');
  };

  return (
    <Container>
      <Header>
        <NavSpace></NavSpace>
        <HeaderContainer>
          <SearchHeader>
            <div>
              <Round
                changePattern={patternChange}
                onClick={handlePatternChange}
              >
                왕복
              </Round>
              <OneWay
                changePattern={patternChange}
                onClick={handlePatternChange}
              >
                편도
              </OneWay>
            </div>
            <ReservationList>
              <span onClick={goToCheck}>항공권 예약내역 </span>
              <span>
                <i className="fa-solid fa-circle-chevron-right"></i>
              </span>
            </ReservationList>
          </SearchHeader>
          <SearchBar>
            <ScheduleContainer>
              <Schedule onClick={handleDestinationOpen}>
                <span>서울 (SEL) </span>
                <i className="fa-solid fa-arrows-rotate"></i>
                <span>{selectedValue}</span>
              </Schedule>
              <Destination
                selectedValue={selectedValue}
                open={destinationOpen}
                onClose={handleDestinationClose}
                PLACES={PLACES}
              />
            </ScheduleContainer>

            <DateContainer>
              <Date>
                <i className="fa-regular fa-calendar"> </i>
                <Calendar
                  setDateRange={setDateRange}
                  startDate={startDate}
                  endDate={endDate}
                  patternChange={patternChange}
                  onewayDate={onewayDate}
                  setOnewayDate={setOnewayDate}
                />
              </Date>
            </DateContainer>

            <PassengerContainer>
              <Passenger onClick={handlePassengerOpen}>
                <div>
                  <i className="fa-solid fa-user-large"> </i>
                  <span>
                    승객 {count} 명, {seat}
                  </span>
                </div>
                <i className="fa-solid fa-angle-down"></i>
              </Passenger>
              <Passenger
                open={passengerOpen}
                onClose={handlePassengerClose}
                count={count}
                passengerInfo={passengerInfo}
                setPassengerInfo={setPassengerInfo}
              ></Passenger>
            </PassengerContainer>

            <SearchBtn onClick={dataFetch}>검색</SearchBtn>
          </SearchBar>
        </HeaderContainer>
      </Header>
      <BodyContainer>
        {savedData ? <RecentSearch></RecentSearch> : ''}
        <Carousel />
        <Recommend></Recommend>
      </BodyContainer>
    </Container>
  );
};

const Container = styled.div``;

const Header = styled.div`
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

const HeaderContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

const SearchHeader = styled.div`
  ${props => proptheme.variableflexSet('row', 'space-between')};
  color: white;
  font-size: 17px;
  font-weight: bold;
`;

const Round = styled.span`
  padding: 10px 15px;
  margin: 20px 5px;
  border-bottom: 3px solid
    ${props => (propchangePattern ? 'transparent' : 'white')};
  color: ${props => (propchangePattern ? '#DCDCDC' : 'white')};
  cursor: pointer;
`;

const OneWay = styled(Round)`
  margin-left: 5px;
  border-bottom: 3px solid
    ${props => (!propchangePattern ? 'transparent' : 'white')};
  color: ${props => (!propchangePattern ? '#DCDCDC' : 'white')};
`;

const ReservationList = styled.div`
  cursor: pointer;
`;

const SearchBar = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 30px;

  div {
    margin-right: 3px;
  }
`;

const ScheduleContainer = styled.div`
  position: relative;
`;

const Schedule = styled.div`
  ${props => proptheme.variableflexSet('row', 'space-between', 'center')};
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

const DateContainer = styled(ScheduleContainer)``;

const Date = styled(Schedule)`
  width: 330px;
  justify-content: space-between;
  padding: 14px;

  i {
    font-size: 20px;
    transform: translate(20px, -2px);
    z-index: 5;
  }

  span:nth-child(3) {
    color: gray;
    font-size: 20px;
  }
`;

const DepartureDate = styled.span`
  color: gray;
`;

const ArriveDate = styled.span`
  display: ${props => (propchangePattern ? 'none' : 'block')};
  color: gray;
`;

const PassengerContainer = styled.div`
  position: relative;
`;

const Passenger = styled(Schedule)`
  width: 320px;
  justify-content: space-between;

  div {
    font-weight: bold;
    transform: translateY(-1px);
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

const BodyContainer = styled.div`
  max-width: 1200px;
  margin: auto;
`;

export default Main;
