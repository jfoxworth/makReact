
// Standard React items
import { FC, ReactElement} from 'react';

// Models
import makOrder from '../../../../src/types/makOrder';

interface propType {
  order: makOrder;
}

const OrderItem:FC<propType> = ({order}):ReactElement => (

  <div className="order-long-card">

      <div className="left-side">
          <div className="order-header">
              <h3>ORDER 46895</h3>
              <span className="date">Aug 17 2019</span>
              <span className="tag is-primary">Shipping</span>
              <span className="order-total">365.45</span>
          </div>

          <div className="ordered-products has-slimscroll">

              <div className="ordered-product">
                  <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/products/red-seat.png" alt="" />
                  <div className="product-meta">
                      <span className="name">Red Seat</span>
                      <span className="price">
                          <span>45.00</span>
                          <span>x <var>1</var></span>
                      </span>
                  </div>
                  <div className="product-subtotal">
                      <span>Total</span>
                      <span>45.00</span>
                  </div>
              </div>

              <div className="ordered-product">
                  <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/products/blue-seat.png" alt="" />
                  <div className="product-meta">
                      <span className="name">Blue Seat</span>
                      <span className="price">
                          <span>35.00</span>
                          <span>x <var>1</var></span>
                      </span>
                  </div>
                  <div className="product-subtotal">
                      <span>Total</span>
                      <span>35.00</span>
                  </div>
              </div>

              <div className="ordered-product">
                  <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/products/dark-seat.jpg" alt="" />
                  <div className="product-meta">
                      <span className="name">Dark Seat</span>
                      <span className="price">
                          <span>52.25</span>
                          <span>x <var>1</var></span>
                      </span>
                  </div>
                  <div className="product-subtotal">
                      <span>Total</span>
                      <span>52.25</span>
                  </div>
              </div>
          </div>
      </div>

      <div className="right-side">

          <img className="side-bg" src="assets/img/logo/nephos-greyscale.svg" alt="" />
          <div className="meta-header">
              <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/avatars/janet.jpg" alt="" />
              <div className="inner-meta">
                  <span>Handled by</span>
                  <span>Janet Smith</span>
              </div>
              <a className="support">
                  <i data-feather="life-buoy"></i>
              </a>
          </div>

          <div className="meta-actions">
              <a className="button is-rounded is-fullwidth primary-button raised">Order Details</a>
              <a className="button is-rounded is-fullwidth grey-button rounded">Invoice</a>
          </div>
      </div>
  </div>

)



export default OrderItem