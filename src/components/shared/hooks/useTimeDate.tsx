/*
*
*   This hook takes the date string and returns a pretty formatted date or date/time. 
*
*/


const useTimeDate = (dateString:number, returnType:string):string=>{

  let workingDate = new Date(dateString);
  let returnDate = workingDate.toDateString();
  const [month, date, year, day] = [workingDate.getMonth(), workingDate.getDate(), workingDate.getFullYear(), workingDate.getDay()];
  const [hour, minutes, seconds] = [workingDate.getHours(), workingDate.getMinutes(), workingDate.getSeconds()];

  const standardHour = hour > 12 ? hour-12 : hour;
  const meridian = hour > 12 ? 'pm' : 'am'
  
  switch ( returnType ){
  
    case 'Year':
      returnDate = year.toString();
    break

    case 'MDY':
      returnDate = month.toString()+'/'+date.toString()+'/'+year.toString();
    break

    case 'TMDY':
      returnDate = standardHour.toString()+':'+minutes.toString()+meridian+' '+returnDate;
    break

  }

  return returnDate

}

export default useTimeDate