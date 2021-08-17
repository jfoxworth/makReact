
// Standard React items
import { FC, ReactElement} from 'react';
import Image from 'next/image';

// Models
import makOrder from '../../../src/types/makOrder';

// Functions
import calcPriceForOrder from '../../../src/functions/calcPriceForOrder';
import calcShippingForOrder from '../../../src/functions/calcShippingForOrder';
import calcTaxForOrder from '../../../src/functions/calcTaxForOrder';
import calcSubtotalForOrder from '../../../src/functions/calcSubtotalForOrder';
import formatMoney from '../../../src/functions/formatMoney';


interface thisProps {
  thisOrder : makOrder  
}

const OrderPaymentInfo = ({thisOrder}:thisProps):ReactElement => {

  return(
    
    <div className="payment-info">
        <h3 className="info-title">Payment Information</h3>
        <div className="payment-block">
            <span>Order subtotal</span>
            <span id="order-subtotal-value" className="has-price">{formatMoney(calcSubtotalForOrder(thisOrder))}</span>
        </div>
        <div className="payment-block">
            <span>Order shipping</span>
            <span id="order-shipping-value" className="has-price">{formatMoney(calcShippingForOrder(thisOrder))}</span>
        </div>
        <div className="payment-block">
            <span>Order tax</span>
            <span id="order-tax-value" className="has-price">{formatMoney(calcTaxForOrder(thisOrder))}</span>
        </div>
        <div className="payment-block">
            <span className="is-bold">Order total</span>
            <span id="order-grandtotal-value" className="has-price is-bold">{formatMoney(calcPriceForOrder(thisOrder))}</span>
        </div>
    </div>
    
  )

}



export default OrderPaymentInfo