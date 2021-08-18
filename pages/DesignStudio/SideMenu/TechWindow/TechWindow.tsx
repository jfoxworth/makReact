
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Functions
import formatMoney from '../../../../src/functions/formatMoney';
import calcPriceForItem from '../../../../src/functions/calcPriceForItem';

// Models
import makDesign from '../../../../src/types/makDesign';


interface propTypes {
  thisDesign : makDesign
}

const TechWindow:FC<propTypes> = ({thisDesign}:propTypes):ReactElement => {

  return(
    
    <>
      <StyledTitle>Design documents</StyledTitle>
      <StyledText>There are currently no documents available for this design</StyledText>
    </>
    
  )

}

const StyledTitle = styled.div`
  margin:20px auto;
  font-size:1.2em;
  text-align:center;
`;

const StyledText = styled.div`
  margin:10px auto;
  font-size:1em;
  text-align:center;
`;

export default TechWindow