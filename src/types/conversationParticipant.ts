
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
*		The participants in the conversations
*
*/

export interface conversationParticipant {
	dateCreated 	: number;					// Number for the date that this entry was created
	conversationId 	: string;					// ID of the conversation that this applies to
	participantId 	: string;					// The ID of the user participating in the conversation
	creatorId		: string; 					// The ID of the user that added this entry
	creatorUserName : string;		// Name of the user that created it
}