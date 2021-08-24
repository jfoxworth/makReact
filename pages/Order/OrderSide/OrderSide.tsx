
// Standard React items
import { FC, ReactElement} from 'react';
import Image from 'next/image';

// Models
import makOrder from '../../../src/types/makOrder';
import { ORDERS_OBJ } from '../../../src/types/makOrder';

// Functions
import calcTaxForOrder from '../../../src/functions/calcTaxForOrder';
import calcPriceForOrder from '../../../src/functions/calcPriceForOrder';
import calcShippingForOrder from '../../../src/functions/calcShippingForOrder';
import calcSubtotalForOrder from '../../../src/functions/calcSubtotalForOrder';

// Hooks
import useFirestoreImage from '../../../src/components/Hooks/useFirestoreImage';

interface thisProps {
  thisOrder : makOrder  
}

const OrderSide = ({thisOrder}:thisProps):ReactElement => {

  return(
    
            <div className="checkout-side">
                <div className="side-header">
                    <h2 className="side-title">Checkout</h2>
                    <a href="/cart.html" className="button is-rounded checkout-back">Previous</a>
                </div>
                <div className="side-inner has-slimscroll">

                    <div className="side-card user-card">
                        <div className="avatar-container">
                            <Image src={'http://via.placeholder.com/250x250'} width={'50px'} height={'50px'} alt={'Helper image'} />
                        </div>
                        <div className="meta">
                            <span>Mak Studio Handler</span>
                            <span id="checkout-username">{thisOrder.handler.name}</span>
                        </div>
                    </div>

                    <div className="side-card is-address">
                        <label className="form-switch is-vhidden">
                            <input id="shipping-switch" type="checkbox" className="is-switch" />
                            <i></i>
                        </label>
                        <h3 className="address-title">Required Action</h3>
                        <p className="address">{ORDERS_OBJ.tasks[thisOrder.stage]}</p>
                    </div>

                    <div className="side-card is-totals">
                        <h3 className="info-title">Payment Information</h3>
                        <div className="payment-block">
                            <span>Order subtotal</span>
                            <span id="checkout-subtotal-value" className="has-price">{calcSubtotalForOrder(thisOrder)}</span>
                        </div>
                        <div className="payment-block">
                            <span>Order shipping</span>
                            <span id="checkout-shipping-value" className="has-price">{calcShippingForOrder(thisOrder)}</span>
                        </div>
                        <div className="payment-block">
                            <span>Order tax</span>
                            <span id="checkout-tax-value" className="has-price">{calcTaxForOrder(thisOrder)}</span>
                        </div>
                        <div className="payment-block">
                            <span className="is-bold">Order total</span>
                            <span id="checkout-grandtotal-value" className="has-price is-bold">{calcPriceForOrder(thisOrder)}</span>
                        </div>
                    </div>

                    <div className="side-action">
                        <button id="checkout-next" className="button primary-button raised is-fullwidth is-rounded">Next Step</button>
                    </div>
                </div>
            </div>
    
  )

}



export default OrderSide