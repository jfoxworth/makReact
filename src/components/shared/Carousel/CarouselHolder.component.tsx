/*
*
*   This component takes in two arrays. The first is the 
*   array of images. The second is the array of labels
*
*/

// Standard React items
import { FC, ReactElement} from 'react';

// Carousel Elements
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ImageCreator from '../ImageCreator/ImageCreator.component';

// Hook for image
import useFirestoreImage from '../hooks/useFirestoreImage';

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