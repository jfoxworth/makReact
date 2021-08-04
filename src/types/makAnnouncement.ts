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
*	  This model represents the announcements made by mak
*
*/

export interface makAnnouncement {
	id 								: string; 					// The id of the entry
  dateCreated       : number;           // Date the announcement was created
  deployDate        : number;           // Data time to deploy
  endDate           : number;           // Date time to stop
  text              : string;           // String of announcement text
  title             : string;           // Title of the announcement
  image             : any; 
  deleted           : boolean;          // Whether or not the ann is deleted
}
