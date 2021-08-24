
// Standard React items
import { ReactElement, SyntheticEvent, useState } from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Redux related items
import { useDispatch } from 'react-redux';
import { orderUpdateStart } from '../../../src/redux/orders/orders.actions';

// Models
import makOrder from '../../../src/types/makOrder';
import makProject from '../../../src/types/makProject';
import makVersion from '../../../src/types/makVersion';
import UserData from '../../../src/types/userData';

// Components
import ListContent from '../../../src/components/List/List';
import ListHeader from '../../../src/components/List/ListHeader/ListHeader';
import ListHeaderName from '../../../src/components/List/ListHeaderName/ListHeaderName';
import ListHeaderText from '../../../src/components/List/ListHeaderText/ListHeaderText';
import ListLine from '../../../src/components/List/ListLine/ListLine';
import ListName from '../../../src/components/List/ListName/ListName';
import ListText from '../../../src/components/List/ListText/ListText';

// Functions
import { makeOrderStatement } from '../../../src/types/makOrderStatement';

// Hooks
import useFirestoreImage from '../../../src/components/Hooks/useFirestoreImage';


interface thisProps {
  thisOrder : makOrder,
  projects : makProject[],
	user: UserData
}

const Stage1 = ({thisOrder, projects, user}:thisProps):ReactElement => {

	const dispatch = useDispatch();

	const [statement, setStatement] = useState('');

	const handleStatementChange = (event:React.ChangeEvent<HTMLInputElement>) => {
		setStatement((event.target as HTMLInputElement).value);
	}

	const insertStatement = (item:makVersion) => {
		let newStatement = makeOrderStatement(item, user.currentUser, statement);
		let newSt = thisOrder.statements;
		newSt.push(newStatement);
		dispatch(orderUpdateStart({...thisOrder, statements:newSt}));
		setStatement('');
	}

	const userImage = useFirestoreImage(`/profile/${user.id}.${user.imageType}`);
	console.log(userImage)

  return(

		<>
		{
			thisOrder.items.map((item, index)=>(

				<div className="order-long-card" key={`orderitem${index}`}>

					<div className="left-side">

						<StyledHeader key={`orderitemname${index}`}>
							{projects.filter((project=>project.id==item.projectId))[0].name}
						</StyledHeader>

						{
							thisOrder.statements
							.filter((statement)=>statement.projectId==item.projectId)
							.map((statement, stindex)=>
								<>
									{ userImage && <div>{<Image src={userImage} width={'50px'} height={'50px'} alt={''} />}</div> }
									<div key={`statement${stindex}`}>{statement.text}</div>
								</>
							)
						}
						
						<div className="order-notes">
								<h3>Order Notes</h3>
								<p>Enter any comments that you have about this design</p>
								<div className="field">
										<div className="control">
												<textarea id="order-notes" className="textarea" rows={3} value={statement} onChange={()=>handleStatementChange(event)}></textarea>
										</div>
								</div>
								<button id="checkout-next" 
												className="button primary-button raised is-fullwidth is-rounded"
												onClick={()=>insertStatement(item)}>
									Insert Statement
								</button>
						</div>

					</div>

					<div className="right-side">

						<ListContent>
							<ListHeader percent={100}>
								<ListHeaderName text={'Parameters'} percent={100} />
							</ListHeader>
							<>
							{
								item.measurements.length >0 &&
								item.measurements.map((meas:any, index:number)=>(
									<ListLine percent={100} key={`meas${index}`}>
										<ListName text={meas.name} percent={60} />
										<ListText text={meas.value} percent={40} />
									</ListLine>
								))
							}
							</>
						</ListContent>

					</div>

				</div>

			))
		}
		</>
    
  )

}

export default Stage1


const StyledSection = styled.div`
	padding: 30px 20px;
	width:100%;
`;

const StyledHeader = styled.div`
	padding: 0px 20px 20px 0px;
	width:100%;
	font-weight:bold;
`;