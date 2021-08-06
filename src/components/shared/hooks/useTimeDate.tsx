/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*   This is the primary component used for inputs within the app.
*   It takes in a handleChange function and other items that may
*   be needed for the input. 
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
  const meridian = hour > 12 ? 'pm' : 'am';

  let monthArray = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ]

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

    case 'MonDY':
      returnDate = monthArray[month]+' '+date.toString()+', '+year.toString();
    break

  }

  return returnDate

}

export default useTimeDate