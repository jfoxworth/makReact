/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*/


// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makDesign from '../../../../src/types/makDesign';

// Components
import CarouselHolder from '../../../../src/components/Carousel/CarouselHolder';


interface propType {
  design:makDesign
}


const ProductPageImagePanel:FC<propType> = ({design}:propType):ReactElement => {

  let imageArray:string[]=[];

  design.marketplace.images.forEach((image:any)=>{
    imageArray.push(image.path);
  });

  return(
    
    <>
    { imageArray.length &&
      <StyledProductPanel>

        <StyledImagePanel>


          <CarouselHolder imageArray={imageArray} />

        </StyledImagePanel>

      </StyledProductPanel>
    }
    </>

  )

}

const StyledProductPanel = styled.div`
  width:50%;
  z-index:1;
  vertical-align:top;
  display:inline-block;
`;

const StyledImagePanel = styled.div`
  padding:5% 0;
  position:relative;
  text-align:center;
`;


export default ProductPageImagePanel