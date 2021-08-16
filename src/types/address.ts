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

export default interface makAddress {
	id 						: string;					// The id of the order
  userId        : string;
  type          : 'shipping' | 'billing' | 'home';
  streetAddress : string;
  city          : string;
  state         : string;
  zip           : string;
  country       : string;
  deleted 			: boolean;
}