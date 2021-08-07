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
*/

export default interface UserData {

	email 				: string;
	displayName 	: string;
	shortBio 			: string;
	website 			: string;
	imageType 		: string;
	designer 			: boolean;
	dateCreated 	: string;
	emailVerified : boolean;
	id 					: string;
	uid 					: string;
	photoURL 			: string;
	admin					: boolean;
}
