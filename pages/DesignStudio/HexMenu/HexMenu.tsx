
// Standard React items
import {useEffect, FC, ReactElement} from 'react';
import styled from 'styled-components';

// Models
import makDesign from '../../../src/types/makDesign';


// Components
import Hexagon from '../../../src/components/Hexagon';


interface typeProps {
  type: string,
	thisDesign: makDesign,
	clickHandler:Function
}

const HexMenu:FC<typeProps> = ({type, thisDesign, clickHandler}:typeProps):ReactElement => {

	console.log(thisDesign.parameterMenus);

  return(
    
    <>
			{ 
				type == 'Design' && thisDesign.parameterMenus &&
				<HexStyledMenu>
					<HexStyledRow1>
						<Hexagon icon={'CommentDollar'} text={'Price'} clickHandler={clickHandler} />
						<Hexagon icon={'Cube'} text={'Designs'} clickHandler={clickHandler} />
					</HexStyledRow1>
					<HexStyledRow2>
						<Hexagon icon={'Download'} text={'Tech Doc'} clickHandler={clickHandler} />
					</HexStyledRow2>
					<HexStyledRow3>
						{ thisDesign.parameterMenus[0] &&
							<Hexagon icon={thisDesign.parameterMenus[0]['icon']} 
											 text={thisDesign.parameterMenus[0]['label']} 
											 clickHandler={clickHandler} />
						}
						{ thisDesign.parameterMenus[1] &&
							<Hexagon icon={thisDesign.parameterMenus[1]['icon']} 
											 text={thisDesign.parameterMenus[1]['label']} 
											 clickHandler={clickHandler} />
						}
					</HexStyledRow3>
				</HexStyledMenu>
			}
    </>

  )

}

const HexStyledMenu = styled.div`
	position:fixed;
	right:0px;
	top:30px;
	display:block;
`;

const HexStyledRow1 = styled.div`
	height:52px;
	display:block;
`;

const HexStyledRow2 = styled.div`
	position:fixed;
	top:84px;
	right:94px;
	height:52px;
	display:block;
`;

const HexStyledRow3 = styled.div`
	position:fixed;
	top:140px;
	right:0px;
	height:52px;
	display:block;
`;

const HexStyledRow4 = styled.div`
	position:fixed;
	top:196px;
	right:94px;
	height:52px;
	display:block;
`;

const HexStyledRow5 = styled.div`
	position:fixed;
	top:250px;
	right:0px;
	height:52px;
	display:block;
`;

export default HexMenu