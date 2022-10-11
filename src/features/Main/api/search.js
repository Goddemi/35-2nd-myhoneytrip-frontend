export const dataFetch = () => {
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
