/*
*
*   Copyright Mak Studio - 2021
*
*   Mak Studio is a Houston based supplier of custom furniture and appliances. 
*   This app lets users design their own pieces and start the purchase process. 
*
*   You can reach Mak Studio at www.makstudio.us
*
*
*
*
*		This model represents the back and forth between customers and reps. Each entry represents 
*   one statement from a customer or a employee
*
*/

// Models
import makVersion from "./makVersion"
import UserData from "./userData"

interface makOrderStatement {
	title 						: string;						// The name or title of the design as shown in marketplace
	dateCreated				: number;						// Numerical value representing the dateString
	creatorId					: string;						// The ID of the user that created the design
	creatorName				: string;						// The user name of the user that created the design
	versionId					: string;
	projectId					: string;
	text							: string;
	pathToPdf					: string;
	deleted 					: boolean;
}

export default makOrderStatement


export const makeOrderStatement = (version:makVersion, user:UserData, text:string) => {
	
	let newSt = {
		title:'',
		dateCreated : Date.now(),
		creatorId: user.id,
		creatorName: user.displayName,
		versionId: version.id,
		projectId: version.projectId,
		text: text,
		pathToPdf: '',
		deleted: false
	}

	return newSt

}