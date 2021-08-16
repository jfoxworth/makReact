
// Standard React items
import { FC, ReactElement } from 'react';


const Orders:FC = ():ReactElement => {


  return(
    
    <div id="order-details" className="section">

        <div className="container">

            <div className="columns account-header">
                <div className="column main-column is-tablet-landscape-padded">
                    <div className="account-title">
                        <a href="orders-list.html" className="title-back">
                            <i data-feather="chevron-left"></i>
                        </a>
                        <h2>ORDER DETAILS</h2>
                        <div className="ml-auto">
                            <div className="order-top-actions">
                                <a><i data-feather="phone"></i> Assistance</a>
                                <a><i data-feather="printer"></i> Print Order</a>
                            </div>
                        </div>
                        <img className="brand-filigrane" src="assets/img/logo/nephos-greyscale.svg" alt=""/>
                    </div>

                    <div className="order-details-wrap">
                        <div className="order-details-header">
                            <div className="left">
                                <span id="order-details-id">ORDER <var>48684</var></span>
                                <span id="order-details-date">Issued on <var>Jul 23 2019</var></span>
                            </div>
                            <div className="right">
                                <img id="order-details-avatar" src="http://via.placeholder.com/250x250" data-demo-src="assets/img/avatars/janet.jpg" alt=""/>
                                <div className="inner-meta">
                                    <span>Handled by</span>
                                    <span id="order-details-contact">Janet Smith</span>
                                </div>
                            </div>
                        </div>

                        <div className="order-stats">
                            <div className="columns">
                                <div className="column is-4">
                                    <div id="payment-tile" className="order-stat">
                                        <h3>Payment</h3>
                                        <div className="order-stat-inner">
                                            <div className="icon-container">
                                                <img src="assets/img/icons/line/payment.svg" alt=""/>
                                                <div className="indicator">
                                                    <i className="check" data-feather="check"></i>
                                                    <i className="error" data-feather="x"></i>
                                                    <i className="warning" data-feather="x"></i>
                                                </div>
                                            </div>
                                            <div className="meta">
                                                <span>Payment</span>
                                                <span>Paid</span>
                                                <span>Credit Card</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div id="shipping-tile" className="order-stat">
                                        <h3>Shipping</h3>
                                        <div className="order-stat-inner">
                                            <div className="icon-container">
                                                <img src="assets/img/icons/line/shipping.svg" alt=""/>
                                                <div className="indicator">
                                                    <i className="check" data-feather="check"></i>
                                                    <i className="error" data-feather="x"></i>
                                                    <i className="warning" data-feather="x"></i>
                                                </div>
                                            </div>
                                            <div className="meta">
                                                <span>Shipping</span>
                                                <span>UPS</span>
                                                <span>Tracking number: <a>1223546</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="column is-4">
                                    <div id="status-tile" className="order-stat">
                                        <h3>Status</h3>
                                        <div className="order-stat-inner">
                                            <div className="icon-container">
                                                <img src="assets/img/icons/line/status.svg" alt=""/>
                                                <div className="indicator">
                                                    <i className="check" data-feather="check"></i>
                                                    <i className="error" data-feather="x"></i>
                                                    <i className="warning" data-feather="x"></i>
                                                </div>
                                            </div>
                                            <div className="meta">
                                                <span>Status</span>
                                                <span>Complete</span>
                                                <span><a>View invoice</a></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="order-body">
                            <div className="columns">
                                <div className="column is-8">

                                    <div className="left-side-header">
                                        <h3>Products</h3>
                                    </div>

                                    <div className="flex-table">

                                        <div className="flex-table-header">
                                            <span className="product"><span>Product</span></span>
                                            <span className="quantity">Quantity</span>
                                            <span className="price">Price</span>
                                            <span className="discount">Discount</span>
                                            <span className="total">Total</span>
                                        </div>

                                        <div className="flex-table-item" data-product-id="107">
                                            <div className="product">
                                                <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/products/kids2.jpg" alt=""/>
                                                <span className="product-name">Rabbit Lamp</span>
                                            </div>
                                            <div className="quantity">
                                                <span>1</span>
                                            </div>
                                            <div className="price">
                                                <span className="has-price">14.49</span>
                                            </div>
                                            <div className="discount">
                                                <span className="has-price">0</span>
                                            </div>
                                            <div className="total">
                                                <span className="has-price">14.49</span>
                                            </div>
                                        </div>

                                        <div className="flex-table-item" data-product-id="107">
                                            <div className="product">
                                                <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/products/cosy-red-seat.png" alt=""/>
                                                <span className="product-name">Red Seat</span>
                                            </div>
                                            <div className="quantity">
                                                <span>1</span>
                                            </div>
                                            <div className="price">
                                                <span className="has-price">45.00</span>
                                            </div>
                                            <div className="discount">
                                                <span className="has-price">0</span>
                                            </div>
                                            <div className="total">
                                                <span className="has-price">45.00</span>
                                            </div>
                                        </div>

                                        <div className="flex-table-item" data-product-id="107">
                                            <div className="product">
                                                <img src="http://via.placeholder.com/250x250" data-demo-src="assets/img/products/blue-seat.png" alt="" />
                                                <span className="product-name">Blue Seat</span>
                                            </div>
                                            <div className="quantity">
                                                <span>2</span>
                                            </div>
                                            <div className="price">
                                                <span className="has-price">35.00</span>
                                            </div>
                                            <div className="discount">
                                                <span className="has-price">0</span>
                                            </div>
                                            <div className="total">
                                                <span className="has-price">70.00</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="payment-info">
                                        <h3 className="info-title">Payment Information</h3>
                                        <div className="payment-block">
                                            <span>Order subtotal</span>
                                            <span id="order-subtotal-value" className="has-price">18.00</span>
                                        </div>
                                        <div className="payment-block">
                                            <span>Order shipping</span>
                                            <span id="order-shipping-value" className="has-price">22.83</span>
                                        </div>
                                        <div className="payment-block">
                                            <span>Order tax</span>
                                            <span id="order-tax-value" className="has-price">0.00</span>
                                        </div>
                                        <div className="payment-block">
                                            <span className="is-bold">Order total</span>
                                            <span id="order-grandtotal-value" className="has-price is-bold">40.83</span>
                                        </div>
                                    </div>
                                </div>

                                <div className="column is-4">

                                    <div className="address-widget is-narrow">
                                        <h3 className="widget-title">Shipping Address</h3>
                                        <p className="address">
                                            <var id="shipping-address1">3833 Mcgowen St.</var> <var id="shipping-address2">Palatanqua Park</var>
                                            <br/><var id="shipping-city">Long Beach</var>, <var id="shipping-state">CA</var> <var
                                                id="shipping-postalCode">90808-1702</var>
                                            <br/><var id="shipping-country">United States</var>
                                        </p>
                                    </div>

                                    <div className="address-widget">
                                        <h3 className="widget-title">Billing Address</h3>
                                        <p className="address">
                                            <var id="billing-address1">3833 Mcgowen St.</var> <var id="billing-address2">Palatanqua Park</var>
                                            <br/><var id="billing-city">Long Beach</var>, <var id="billing-state">CA</var> <var
                                                id="billing-postalCode">90808-1702</var>
                                            <br/><var id="billing-country">United States</var>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )

}

export default Orders
