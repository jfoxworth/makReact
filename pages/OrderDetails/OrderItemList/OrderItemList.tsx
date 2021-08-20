
// Standard React items
import { FC, ReactElement} from 'react';
import Image from 'next/image';

// Models
import makOrder from '../../../src/types/makOrder';
import makProject from '../../../src/types/makProject';

// Functions
import formatMoney from '../../../src/functions/formatMoney';
import calcTaxForItem from '../../../src/functions/calcTaxForItem';
import calcPriceForOrder from '../../../src/functions/calcPriceForOrder';

interface thisProps {
  thisOrder : makOrder,
  projects : makProject[]
}

const OrderItemList = ({thisOrder, projects}:thisProps):ReactElement => {

  return(

    <>
      <div className="left-side-header"><h3>Products</h3></div>
    
      <div className="flex-table">

          <div className="flex-table-header">
              <span className="product"><span>Product</span></span>
              <span className="quantity">Quantity</span>
              <span className="price">Price</span>
              <span className="discount">Tax</span>
              <span className="total">Total</span>
          </div>

          {
            thisOrder.items.map((item, index)=>(

              <div className="flex-table-item" key={`itemlist${index}`}>
                  <div className="product">
                    <Image src={"http://via.placeholder.com/250x250"} width={'250px'} height={'250px'} alt={''} />
                    <span className="product-name">{projects.filter((project:makProject)=>project.id==item.projectId)[0].name}</span>
                  </div>
                  <div className="quantity">
                      <span>1</span>
                  </div>
                  <div className="price">
                      <span className="has-price">{formatMoney(item.price)}</span>
                  </div>
                  <div className="discount">
                      <span className="has-price">{formatMoney(calcTaxForItem(item.price))}</span>
                  </div>
                  <div className="total">
                      <span className="has-price">{formatMoney(item.price+calcTaxForItem(item.price))}</span>
                  </div>
              </div>

            ))
          }

      </div>
    </>
    
  )

}



export default OrderItemList