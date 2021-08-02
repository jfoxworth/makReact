

// Standard React items
import { ReactElement } from 'react';
import Image from 'next/image';

type propItems = {
  children:ReactElement[]
}

const ProductListImage = ():ReactElement => (
  
  <span className="image">
    <Image src={'http://via.placeholder.com/500x500/ffffff/999999'} width={"100px"} height={"100px"} alt={"Product Image"}/>
  </span>

)

export default ProductListImage


