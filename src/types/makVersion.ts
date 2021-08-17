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
*		An instance of the project version
*
*/

import makProject from "./makProject"
import UserData from "./userData"

export default interface makVersion {
	id 						: string;		// UID for the version
	dateCreated 	: number;		// Date that this project was created
	creatorId			: string;		// Id of the user that created if
	creatorName 	: string;		// Name of the user that created project
	description 	: string;		// Description of the project
	designId 			: string;		// ID of the design that this project was based on
	initialOpen 	: boolean;	// Whether or not this file has been opened
	name 					: string;		// Name of the version
	projectId 		: string;		// ID of the project that this version is based on
	version 			: number;		// What version this entry represents
	measurements	: any;			// Array that holds the values that have been edited for this version
	values				: any;			// Array that holds the values that have been edited for this version
	price 				: number;		// Price for this project based on this version
	tax 					: number;		// The amount of tax that must be paid on the item
	totalCost 		: number; 	// The total cost of the item
	deposit 			: number; 	// The amount that the customer must put down as a deposit
	uploadedImage : any; 			// A placeholder for the logo image that is uploaded as part of the design
	deleted 			: boolean;	// If true, then the item has been deleted

}

export const makeNewVersion = (project:makProject, user:UserData, measurements:[]) => {

	return {
		id: '',
		dateCreated: Date.now(),
		creatorId: user.id,
		creatorName: user.displayName,
		description: '',
		designId: project.designId,
		initialOpen:true,
		name:`New Version for ${project.name}`,
		projectId: project.id,
		version: 1,
		measurements:measurements,
		values:[],
		price:0,
		tax:0,
		totalCost:0,
		deposit:0,
		uploadedImage:'',
		deleted: false
	}
}