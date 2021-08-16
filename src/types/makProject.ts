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
*		A project is when a user creates an instance of a model and will
*		then edit that model's parameters in as many versions as necessary.
*
*/

import makDesign from "./makDesign"
import UserData from "./userData"

export default interface makProject {
	id						: string; 		// ID of project
	creatorId 		: string;			// Id of the user that created the project
	creatorName 	: string; 		// Name of the user that created the project 
	dateCreated 	: number;			// The date that the project was created
	description 	: string;			// Description of the project
	designId 			: string;			// ID of the design used as the basis of the project
	designType 		: string;			// ?
	initialOpen 	: boolean;		// Whether or not this is the first time that the project is being opened
	name 					: string;			// Name of the project
	status 				: number;			// ?
	versions 			: string;			// The number of versions that exist for this project
	deleted 			: boolean;		// If true, then the item has been deleted
}


export const makeNewProject = (design:makDesign, user:UserData) => {

	return {
		id: '',
		creatorId: user.id,
		creatorName: user.displayName,
		dateCreated: Date.now(),
		description: '',
		designId: design.id,
		initialOpen:true,
		name:`New Project from ${design.title}`,
		status: 0,
		versions: 1,
		deleted: false
	}
}