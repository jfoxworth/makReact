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

const calcShippingForOrder = (order:makOrder):number => {

  return order.items.length * 50;

}

export default calcShippingForOrder