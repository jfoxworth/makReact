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
import {FC, ReactElement} from 'react';
import Link from 'next/link';

// Hooks
import useFirestoreImage from '../shared/hooks/useFirestoreImage';

// Components
import FaIcon from '../shared/faIcons/faIcon.component';


const CatalogTile:FC<any> = ({design}:any):ReactElement => {

  const imageString = useFirestoreImage(design.marketplace.images.filter((image:any)=>image.mainImage)[0].path)

  const divStyle = {
    backgroundImage: 'url(' + imageString + ')'
  }

  return(

        <div className="tile is-4 is-parent is-pulled-left">

          <article className="tile is-child has-min-height has-background-image" 
                   style={divStyle} >

              <div className="tile-content">
                  <h2 className="shop-category">{design.title}</h2>
                  <div className="divider"></div>
                  <p>{design.category}</p>
                  <p className="is-italic">{design.description}</p>
                  <div className="products">
                      ${design.initialPrice} <span>Base Price</span>
                  </div>

                  <Link href={`/catalog/${design.id}`} >
                    <a className="action">
                        <span>More Info</span>
                        <FaIcon icon={'ChevronRight'} />
                    </a>
                  </Link>
              </div>

              <div className="tile-overlay"></div>
          </article>
        </div>
 
  )
}

export default CatalogTile
