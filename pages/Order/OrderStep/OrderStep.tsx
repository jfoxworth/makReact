
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makOrder from '../../../src/types/makOrder';

// Hooks
import useTimeDate from '../../../src/components/Hooks/useTimeDate';

interface thisProps {
  thisOrder : makOrder  
}

const OrderStep = ({thisOrder}:thisProps):ReactElement => {

  return(
    <div className="action-bar is-centered">
      <div className="steps-wrapper">
        <ol className="step-list">
          <li className="active"></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ol>
      </div>
    </div>
    
  )

}



export default OrderStep