/*
*
*   This the code that displays a single tile for the catalog. Each tile represents
*   one design. 
*
*/ 

// Standard React items
import {FC, ReactElement} from 'react';

// Import custom hook
import useFirestoreImage from '../shared/hooks/useFirestoreImage';
import Link from 'next/link';
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
