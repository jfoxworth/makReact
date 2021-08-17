
// Standard React items
import React, { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Redux related items
import { useSelector, useDispatch } from 'react-redux';
import { selectDesigns } from '../../../src/redux/designs/designs.selectors';
import { selectProjects } from '../../../src/redux/projects/projects.selectors';
import { orderUpdateStart } from '../../../src/redux/orders/orders.actions';

// Models
import makVersion from '../../../src/types/makVersion';
import makProject from '../../../src/types/makProject';
import makDesign from '../../../src/types/makDesign';
import makOrder from '../../../src/types/makOrder';

// Components
import FaIcon from '../../../src/components/FaIcon';

// Functions
import formatMoney from '../../../src/functions/formatMoney';


interface CartProps {
  cart: makOrder
  item: makVersion;
}

const CartItem:FC<CartProps> = ({cart, item}):ReactElement => {

  const dispatch = useDispatch();

  let designs =  useSelector(selectDesigns);
  let projects =  useSelector(selectProjects);

  let thisProject = {} as makProject;
  let thisDesign = {} as makDesign;

  if (designs.designs.length>0 && projects.projects.length>0)
  {
    thisProject=projects.projects.filter((project:makProject)=>project.id==item.projectId)[0];
    thisDesign=designs.designs.filter((design:makDesign)=>design.id==item.designId)[0];
  }

  const removeFromCart = (thisOrder:makOrder, itemId:string) => {
    let newItems = thisOrder.items;
    newItems.splice(newItems.findIndex((item:makVersion)=>item.id==itemId),1);
      dispatch(orderUpdateStart({...thisOrder, items:newItems}));
  }

  return(

    <div className="flat-card is-auto cart-card product-container" data-product-id="">

      <ul className="cart-content">

        <li>
            <img src="http://via.placeholder.com/500x500/ffffff/999999"
                data-demo-src="assets/img/products/office6.png" alt="" />


            <span className="product-info">
                <span>{thisDesign.title}</span>
                <span>{thisDesign.category}</span>
            </span>
            <span className="product-price">
                <span>Price</span>
                <span>{formatMoney(item.price)}</span>
            </span>

            <div data-trigger="spinner" className="main-cart-spinner">
                <input className="hidden-spinner" type="hidden" value="1" data-spin="spinner" data-rule="quantity"
                    data-min="1" data-max="99" />
                <a className="spinner-button is-remove" href="javascript:;" data-spin="down">
                    <FaIcon icon={'Minus'} />
                </a>
                <span className="spinner-value">1</span>
                <a className="spinner-button is-add" href="javascript:;" data-spin="up">
                    <FaIcon icon={'Plus'} />
                </a>
            </div>

            <span className="action">
                <span className="action-link is-remove has-simple-popover" data-content="Remove from Cart"
                    data-placement="top">
                    <a href="#" onClick={()=>removeFromCart(cart, item.id)}><FaIcon icon={'Trash'}/></a>
                </span>
            </span>
        </li>
      </ul>
    </div>

  )
}


const StyledNoCart = styled.div`
  font-size:2em;
  margin:auto;
`;


export default React.memo(CartItem);