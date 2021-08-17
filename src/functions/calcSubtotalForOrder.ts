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

const calcSubtotalForOrder = (order:makOrder):number => {

  let totalPrice = 0;
  order.items.map((item:makVersion)=>{
    totalPrice = totalPrice + item.price;
  });

  return totalPrice
}

export default calcSubtotalForOrder