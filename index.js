// Code your solution in this file!
// returnFirstTwoDrivers
const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']


const returnFirstTwoDrivers =function(){
    return drivers.slice(0, 2)
}


// returnLastTwoDrivers
const returnLastTwoDrivers = function(){
    return drivers.slice(2, 4)
}


// selectingDrivers
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


// createFareMultiplier
const createFareMultiplier = function(integerArgument){
    return (fare)=>{
        return fare * integerArgument;
    }
}



// fareDoubler 
const fareDoubler = createFareMultiplier(2);

// fareTripler
const fareTripler = createFareMultiplier(3);


// selectDifferentDrivers
const selectDifferentDrivers = function(drivers, eitherDriversArray){
    return eitherDriversArray(drivers);
}