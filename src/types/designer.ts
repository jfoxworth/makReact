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
*		Entry representing a user that has been given designer status
*
*/

export interface designer {
	userId 				: string;		// ID of the user in question
	dateCreated 		: number;		// Date that this entry was created
	creatorId			: string;		// The user that created it
	creatorUserName 	: string;		// Name of the user that created it
}