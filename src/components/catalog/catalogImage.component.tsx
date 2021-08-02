
// Standard React items
import { FC, ReactElement} from 'react';
import useFirestoreImage from '../shared/hooks/useFirestoreImage';
import Image from 'next/image';

const CatalogImage:FC<any> = ({image}:{image:string}):ReactElement => {

  console.log(image)
  const fireImage = useFirestoreImage(image);
  console.log(fireImage)

  return(
     
    <>
      { fireImage &&
        <Image src={fireImage} layout={"fill"} alt={"Carousel Image"}/>
      }
    </>
  )

}



export default CatalogImage