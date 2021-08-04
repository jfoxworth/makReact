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
*
*		Users who have permissions to edit designs
*
*/

export interface designPermission {
	designId 	: string;
	members 	: string[];
	userId		: string;
}