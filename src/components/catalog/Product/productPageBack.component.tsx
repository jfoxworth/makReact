
// Standard React items
import { ReactElement} from 'react';
import styled from 'styled-components';
import FaIcon from '../../shared/faIcons/faIcon.component';
import Link from 'next/link';



const ProductPageBack = ({backUrl}:{backUrl:string}):ReactElement => {


  return(
    <StyledBack>
      <div>
        <Link href={backUrl} passHref={true} >
          <div>
            <StyledArrow>
              <FaIcon icon={"ChevronLeft"} />
            </StyledArrow>
             Back to Catalog
          </div>
        </Link>
      </div>
    </StyledBack>
  )
}


const StyledBack = styled.div`
  position:absolute;
  top:25px;
  left:25px;
  font-size: 0.75em;
  color:#acacac;
  margin:0px 0px 10px 0px;
  cursor:pointer;`

  const StyledArrow = styled.div`
  position:relative;
  top:2px;
  float:left;
  margin:0px 5px 0px 0px;`


export default ProductPageBack