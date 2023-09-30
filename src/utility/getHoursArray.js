import { convertToTwelveHourClock } from '../utility/timeFunction';

export const getHoursArray = (hours) => {
  const hoursArray = [];
  hours.forEach(day => {
    if(day === null){
      hoursArray.push("closed");
    }else{
      hoursArray.push(`${convertToTwelveHourClock(day.openTime)} - ` +
      `${convertToTwelveHourClock(day.closeTime)}`);
    }
  });
  return hoursArray;
}