/*
*
*
*	This model represents the design created by a designed and edited
*	by a customer on the site.
*
*/

interface makDesign {
	id 								: string; 					// The id of the entry
	title 						: string;						// The name or title of the design as shown in marketplace
	dateCreated				: number;						// Numerical value representing the dateString
	creatorId					: string;						// The ID of the user that created the design
	creatorName				: string;						// The user name of the user that created the design
	category 					: string;						// Wall, seating, etc
	company 					: any;							// defunct tbd
	companyId					: string;						// The ID for the company from that collection
	initialPrice 			: number;						// The cost displayed before the user makes any changes
	description 			: string;						// The description as seen in the marketplace
	marketplace				: any;
	price 						: number;						// The calculated numerical price of the item
	priceString 			: string; 					// The string containing the entered formula for the price
	priceFormula 			: string;						// Formula for how the price of the item is calculated
	priceArray 				: any[];						// Array with components of price array
	priceShowForm 		: string;						// Whether or not the formula is displayed ?
	priceStatus 			: boolean;					// Whether or not the formula as entered is valid
	priceValid 				: boolean;					// Whether or not the price as calculated is valid ?
	shapediverTicket 	: string;						// String for the shapediver model ticket
	status 						: string;						// Whether or not the design is valid.
																				// 0 for still being designed
																				// 1 for active in store
																				// 2 for design possibilities being voted on
	parameterMenus 		: any[];						// An array of objects that contain parameter for the menu
	explodeMenus			: any[];						// An array of objects that containe
	menuDisplayType 	: 'hex';						// Either 'hex' denoting the hex menus or 'explode' - the Default display
	designType 				: 'shapediver';			// Either 'shapediver' denoting the 3D shapediver model or 'image'
	signoffRequired 	: boolean;					// Whether or not this design requires a signoff of some kind
	deleted 					: boolean;					// If true, then the item has been deleted

	imageOptions			: any[];						// For 2D images, the options to be displayed for various selections
	imageSelection		: any[];						// For 2D images, the images selected for the given option
	defaultImage			: any;							// For 2D images, the default image when the option is not set
	featured					: boolean;					// If this design is featured on the dashboard
}

export default makDesign