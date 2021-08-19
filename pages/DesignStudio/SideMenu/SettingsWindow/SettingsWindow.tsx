
// Standard React items
import { FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makDesign from '../../../../src/types/makDesign';

// Components
import SliderParam from './SliderParam';
import DropdownParam from './DropdownParam';

interface propTypes {
  thisDesign : makDesign,
  thisMenu : any
}

const SettingsWindow:FC<propTypes> = ({thisDesign, thisMenu}:propTypes):ReactElement => {

  console.log(thisMenu)
  return(
    
    <>
      {
        thisMenu.parameters.map((param:any, index:number) => {

          if ( param.type == 'slider' )
          { return <SliderParam param={param} key={`sliderparam${index}`} /> }

          if ( param.type == 'dropdown' )
          { return <DropdownParam param={param} key={`dropdownparam${index}`} /> }

        })
      }
    </>
    
  )

}


export default SettingsWindow