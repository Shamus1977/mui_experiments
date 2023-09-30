
export const convertToTwelveHourClock = (time) => {
  if(time !== "00:00"){
    const timeArray = time.split(":");
    const hour = timeArray[0];
    const minute = timeArray[1];
    const newTime = hour >= 12 && hour < 13 ? time +"pm" : 
      hour >= 13 ? hour - 12+":"+minute+"pm":time+"am";
    return newTime;
  }else{
    return "12:00am"
  }
}