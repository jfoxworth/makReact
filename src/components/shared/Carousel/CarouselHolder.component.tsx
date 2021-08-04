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

// Hook for image
import useFirestoreImage from '../hooks/useFirestoreImage';

// Components - Carousel Elements
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageCreator from '../ImageCreator/ImageCreator.component';

const CarouselHolder:FC<any> = ({imageArray}:{imageArray:any}):ReactElement => {

  return(
    
    <Carousel>
      { 
        imageArray.map((image:string, imageIndex:string)=>(
          <img src={useFirestoreImage(image)} alt='' key={`carImage${imageIndex}`} width={'600px'} />
        ))

      }
    </Carousel>
  )

}



export default CarouselHolder