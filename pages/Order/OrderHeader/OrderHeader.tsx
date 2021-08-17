
// Standard React items
import { FC, ReactElement} from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Models
import makOrder from '../../../src/types/makOrder';

//Components
import FaIcon from '../../../src/components/FaIcon';

interface thisProps {
  thisOrder : makOrder  
}

const OrderHeader = ({thisOrder}:thisProps):ReactElement => {

  return(
    
    <div className="account-title">
      <Link href="/Orders">
        <a className="title-back">
          <FaIcon icon={'ChevronLeft'} />
        </a>
      </Link>
      <h2>ORDER DETAILS</h2>
      <Image src={"/makTextBlackSmall.png"} width={'150px'} height={'75px'} alt={'mak logo'} />
    </div>
    
  )

}



export default OrderHeader