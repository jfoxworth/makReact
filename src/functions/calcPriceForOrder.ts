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

import calcTaxForItem from "./calcTaxForItem";
import calcShippinForItem from "./calcShippingForItem";
import makOrder from "../types/makOrder";
import makVersion from "../types/makVersion";

const calcPriceForOrder = (order:makOrder):number => {

  let totalPrice = 0;
  order.items.map((item:makVersion)=>{
    totalPrice = totalPrice + item.price + calcTaxForItem(item.price) + calcShippinForItem(item);
  });

  return totalPrice
}

export default calcPriceForOrder