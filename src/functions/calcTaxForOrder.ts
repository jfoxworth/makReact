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

import makOrder from "../types/makOrder";
import makVersion from "../types/makVersion";

const calcTaxForOrder = (order:makOrder):number => {

  let totalTax = 0;
  order.items.map((item:makVersion)=>{
    totalTax = totalTax + item.price * 0.0825;
  });

  return totalTax
}

export default calcTaxForOrder