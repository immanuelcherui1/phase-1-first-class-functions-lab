const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers=()=>drivers.slice(0,2);

const returnLastTwoDrivers=()=>drivers.slice(2,4);

const selectingDrivers=[returnFirstTwoDrivers,returnLastTwoDrivers]

const createFareMultiplier=(multiplier)=>((fare)=>fare*multiplier)

const fareDoubler=createFareMultiplier(2);

const fareTripler=createFareMultiplier(3);

const selectDifferentDrivers=(drivers, eitherOfDrivers)=>eitherOfDrivers(selectingDrivers);