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
*		This is an order that a user has started and is in some state of completion.
*		First, the user has a cart. From that, they start an order. The order has 
*		steps and completes with delivery.
*
*/

import makVersion from './makVersion';
import makAddress from './address';

export default interface makOrder {
	id 							: string;					// The id of the order
	isCart					: boolean;				// True if this is the current cart; false if not
	items 					: makVersion[];		// An array of versions for projects that are included in this order
	quantities 			: [];							// An array with keys of the version IDs and entries corresponding to the number ordered
	dateCreated 		: number;						// The date that the order was created
	dateAccessed  	: number;						// The date that the order was last accessed or altered
	homeAddress 		: makAddress;
	shippingAddress : makAddress;
	billingAddress 	: makAddress;
	stage 					: 'CART' | 'INITIAL_DESIGN' | 'DESIGN_ACCEPTED' | 'DEPOSIT_MADE' | 'SHIPPING' | 'DELIVERED'; 
	initialCost			: number;
	tax							: number;
	totalCost 			: number;
	deleted 				: boolean;
	userId					: string;
}

export const makeNewOrder = () => {
	
	let shipAddress:makAddress = {
    id: '',
    userId: '',
    type: 'shipping',
		streetAddress:'',
		city: '',
		state: '',
		zip: '',
		country: '',
		deleted: false
  };

	let billingAddress:makAddress = {
    id: '',
    userId: '',
    type: 'billing',
		streetAddress:'',
		city: '',
		state: '',
		zip: '',
		country: '',
		deleted: false
  };

	let homeAddress:makAddress = {
    id: '',
    userId: '',
    type: 'home',
		streetAddress:'',
		city: '',
		state: '',
		zip: '',
		country: '',
		deleted: false
  };

	let newOrder:makOrder = {
    id:'',
    isCart:false,
    items:[],
    quantities:[],
    dateCreated : Date.now(),
    dateAccessed : Date.now(),
    homeAddress : homeAddress,
    shippingAddress : shipAddress,
    billingAddress : billingAddress,
    stage : 'CART',
    initialCost: 0,
    tax : 0,
    totalCost: 0,
    deleted: false,
    userId : '',
  }

	return newOrder
}

export const ORDERS_OBJ = {

	stages : {
		CART: "Still in Cart",
		INITIAL_DESIGN: "Initial Design",
		DESIGN_ACCEPTED: "Design Accepted",
		DEPOSIT_MADE: "Deposit Made",
		SHIPPING: "Shipping",
		DELIVERED: "Delivered"
	},

	completion : {
		CART:2,
		INITIAL_DESIGN: 20,
		DESIGN_ACCEPTED: 40,
		DEPOSIT_MADE: 60,
		SHIPPING: 80,
		DELIVERED: 100
	},

	colors : {
		CART:'grey',
		INITIAL_DESIGN: 'blue',
		DESIGN_ACCEPTED: 'yellow',
		DEPOSIT_MADE: 'orange',
		SHIPPING: 'brown',
		DELIVERED: 'green'
	},

	icons : {
		CART:'ShoppingCart',
		INITIAL_DESIGN: 'Palette',
		DESIGN_ACCEPTED: 'PencilRuler',
		DEPOSIT_MADE: 'CreditCard',
		SHIPPING: 'Truck',
		DELIVERED: 'ClipboardCheck'
	}

}

