
// Standard React items
import { FC, ReactElement} from 'react';
import { useRouter } from 'next/router'
import styled from 'styled-components';

// Components
import HeaderTitle from '../../src/components/HeaderTitle';

const InvoiceID:FC = ():ReactElement => {

  // Pull the product ID from the URL
  const router = useRouter()
  const { InvoiceID } = router.query;


  return(
    
    <div className="columns category-header">

      <div className="column main-column is-tablet-landscape-padded">

        <HeaderTitle text={`Invoice ${InvoiceID}`} />

    <div id="invoice-page" className="section">
        <div className="container">

            <div className="columns account-header">
                <div className="column invoice-column invoice-wrap is-invoice-landscape-padded">

                    <div className="invoice-controls">
                        <a href="orders.html" className="button feather-button is-bold primary-button raised">Back</a>
                    </div>

                    <div className="invoice">
                        <div className="columns is-flex-mobile">

                            <div className="column is-7">
                                <img src="assets/img/logo/nephos.svg" className="logo" alt="" />
                            </div>

                            <div className="column is-5">
                                <p className="invoice-meta has-text-right">
                                    <span>Invoice N° <small>2018/754</small></span>
                                    <br/>
                                    <span>Order N° <small>48771</small></span>
                                </p>
                            </div>
                        </div>
                        <div className="columns">

                            <div className="column is-7">
                                <p className="seller">
                                    <span>Nephos Ltd.</span><br/>
                                    168, Church Street, Brenning DC<br/>
                                    48506 NY City
                                </p>
                                <br/>

                                <p className="invoice-meta has-text-left">
                                    <span>Issued on : <small className="date">mar 23 2018</small></span>
                                </p>
                            </div>

                            <div className="column is-5">
                                <p className="buyer has-text-right">
                                    <span>John Doe</span><br/>
                                    johndoe@gmail.com<br/>
                                    12, Armory Street<br/>
                                    54250 Seattle
                                </p>
                            </div>
                        </div>
                        <br/>
                        <br/>
                        <div className="columns">
                            <div className="column">

                                <table className="table table-striped responsive-table">

                                    <thead>
                                        <tr>
                                            <th>Product</th>
                                            <th className="has-text-centered">Quantity</th>
                                            <th>Price</th>
                                            <th>Total</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        <tr>
                                            <td>
                                                <span className="product">Shipping</span> 
                                                <br/>
                                                <span className="sku">UPS Delivery</span>
                                            </td>
                                            <td className="has-text-centered">
                                                <span className="quantity">1</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="unit-price">80,00</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="total-price">80,00</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span className="product">The Conqueror</span> 
                                                <br/>
                                                <span className="sku">SKU-778</span>
                                            </td>
                                            <td className="has-text-centered">
                                                <span className="quantity">1</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="unit-price">395,00</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="total-price">395,00</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span className="product">The Gentleman</span> 
                                                <br/>
                                                <span className="sku">SKU-429</span>
                                            </td>
                                            <td className="has-text-centered">
                                                <span className="quantity">1</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="unit-price">285,00</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="total-price">285,00</span>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td>
                                                <span className="product">Styled Lamp</span> 
                                                <br/>
                                                <span className="sku">SKU-117</span>
                                            </td>
                                            <td className="has-text-centered">
                                                <span className="quantity">2</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="unit-price">43,45</span>
                                            </td>
                                            <td className="text-right">
                                                <span className="total-price">86,90</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="columns">
                            <div className="column is-7">
                            </div>

                            <div className="column is-5">
                                <table className="table table-sm sub-table text-right">
                                    <tr>
                                        <td><span className="subtotal">Subtotal</span></td>
                                        <td className="text-right"><span className="subtotal-value">481,90</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="vat">VAT (20%)</span></td>
                                        <td className="text-right"><span className="vat-value">96,38</span></td>
                                    </tr>
                                    <tr>
                                        <td><span className="total">Total</span></td>
                                        <td className="text-right"><span className="total-value">578,28</span></td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                        <br/>

                        <p className="bottom-page has-text-right">
                            <span className="company">NEPHOS LTD</span> <br/>
                            <span className="id">ID° 80897753200015 NY</span><br/>
                            <span className="url">nephos.com/customers</span><br/>
                            <span className="code">IBAN FR76 1470 7034 0031 4211 7882 825</span><br/> 
                            <span className="code">SWIFT CCBPFRPPMTZ</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>

    </div>

      </div>

    </div>
    
  )

}


const StyledPanel = styled.div`
  background:#FFFFFF;
  padding:0 1em;
`;


export default InvoiceID