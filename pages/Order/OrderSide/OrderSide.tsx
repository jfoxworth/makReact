
// Standard React items
import { FC, ReactElement} from 'react';
import Image from 'next/image';

// Models
import makOrder from '../../../src/types/makOrder';

// Hooks
import useTimeDate from '../../../src/components/Hooks/useTimeDate';

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
                            <img id="checkout-avatar" src="http://via.placeholder.com/250x250" data-demo-src="assets/img/avatars/elie.jpg" alt="" />
                        </div>
                        <div className="meta">
                            <span>Checkout as</span>
                            <span id="checkout-username">Elie Daniels</span>
                        </div>
                    </div>

                    <div className="side-card is-address">
                        <label className="form-switch is-vhidden">
                            <input id="shipping-switch" type="checkbox" className="is-switch" />
                            <i></i>
                        </label>
                        <h3 className="address-title">Shipping Address</h3>
                        <p className="address">
                            <var id="shipping-address1">463 San Bernardo Ave</var>, <var id="shipping-address2">Crimson Road</var>
                            <br/><var id="shipping-city">Long Beach</var>, <var id="shipping-state">CA</var> <var
                                id="shipping-postalCode">90808</var>
                            <br/><var id="shipping-country">United States</var>
                        </p>
                    </div>

                    <div className="side-card is-totals">
                        <h3 className="info-title">Payment Information</h3>
                        <div className="payment-block">
                            <span>Order subtotal</span>
                            <span id="checkout-subtotal-value" className="has-price">200.37</span>
                        </div>
                        <div className="payment-block">
                            <span>Order shipping</span>
                            <span id="checkout-shipping-value" className="has-price">0.00</span>
                        </div>
                        <div className="payment-block">
                            <span>Order tax</span>
                            <span id="checkout-tax-value" className="has-price">7.82</span>
                        </div>
                        <div className="payment-block">
                            <span className="is-bold">Order total</span>
                            <span id="checkout-grandtotal-value" className="has-price is-bold">208.09</span>
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