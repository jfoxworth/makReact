
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Functions
import formatMoney from '../../../../src/functions/formatMoney';
import calcPriceForItem from '../../../../src/functions/calcPriceForItem';

// Models
import makDesign from '../../../../src/types/makDesign';


interface propTypes {
  clickHandler : Function,
  thisDesign : makDesign
}

const PriceWindow:FC<propTypes> = ({clickHandler, thisDesign}:propTypes):ReactElement => {

  return(
    
    <>
      <StyledTitle>Starting cost of design</StyledTitle>
      <StyledCost>${formatMoney(calcPriceForItem(thisDesign.initialPrice))}</StyledCost>
    </>
    
  )

}

const StyledTitle = styled.div`
  margin:20px auto;
  font-size:1.2em;
  text-align:center;
`;

const StyledCost = styled.div`
  margin:10px auto;
  font-size:2em;
  text-align:center;
`;

export default PriceWindow