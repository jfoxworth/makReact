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

const calcPriceForItem = (dollarValue:number):number => {
  
  return dollarValue -0+ dollarValue * 0.0825;

}

export default calcPriceForItem