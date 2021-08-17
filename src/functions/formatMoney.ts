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
*/

const formatMoney = (dollarValue:number | string):string => {

  let moneyString = dollarValue.toString();
  moneyString = moneyString.includes('.') ? moneyString : moneyString+'.00'; 
  let dollarString = moneyString.split('.')[0];
  let centString = moneyString.split('.')[1];
  if ( dollarString.length > 6 )
  {
    dollarString = dollarString.slice(0, dollarString.length-6) + "," + dollarString.slice(dollarString.length-6);
  }
  if ( dollarString.length > 3 )
  {
    dollarString = dollarString.slice(0, dollarString.length-3) + "," + dollarString.slice(dollarString.length-3);
  }
  return dollarString + '.' + centString;
}

export default formatMoney