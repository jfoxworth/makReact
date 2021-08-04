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

// Models
import makDesign from '../../../types/makDesign';

// Components
import CarouselHolder from '../../shared/Carousel/CarouselHolder.component';


const ProductPageImagePanel:FC<any> = ({design}:{design:makDesign}):ReactElement => {

  let imageArray:string[]=[];

  design.marketplace.images.forEach((image:any)=>{
    imageArray.push(image.path);
  });

  return(
    
    <>
    { imageArray.length &&
      <div className="product-panel">

        <div id="product-view" className="product-image translateLeft">

          <CarouselHolder imageArray={imageArray} />

        </div>

      </div>
    }
    </>

  )

}


export default ProductPageImagePanel