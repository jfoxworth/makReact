

// Standard React items
import { ReactElement } from 'react';
import makProject from '../../../types/makProject';


const ProductListDescription = ({project}:{project:makProject}):ReactElement => (
  
  <span className="product-abstract is-hidden-mobile">
    {project.description}
    <span className="view-more">
        <a className="product-details-link" href={`/projects/${project.id}`}>Project details 
          <i data-feather="chevron-right"></i>
        </a>
    </span>
  </span>
)

export default ProductListDescription


