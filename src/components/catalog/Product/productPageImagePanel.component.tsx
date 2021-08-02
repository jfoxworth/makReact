
// Standard React items
import { FC, ReactElement} from 'react';
import CarouselHolder from '../../shared/Carousel/CarouselHolder.component';
import makDesign from '../../../types/makDesign';

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