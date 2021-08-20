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
import UserData from './userData';

export default interface makOrder {
	id 							: string;					// The id of the order
	isCart					: boolean;				// True if this is the current cart; false if not
	items 					: makVersion[];		// An array of versions for projects that are included in this order
	quantities 			: [];							// An array with keys of the version IDs and entries corresponding to the number ordered
	dateCreated 		: number;					// The date that the order was created
	dateAccessed  	: number;					// The date that the order was last accessed or altered
	homeAddress 		: makAddress;
	shippingAddress : makAddress;
	billingAddress 	: makAddress;
	stage 					: 'CART' | 'DESIGN_SUPPORT' | 'DESIGN_ACCEPTED' | 'DEPOSIT_MADE' | 'PLANS_ACCEPTED' | 'PAYMENT_COMPLETE' | 'MANUFACTURING' | 'SHIPPING' | 'DELIVERED'; 
	initialCost			: number;
	tax							: number;
	totalCost 			: number;
	deleted 				: boolean;
	userId					: string;
	handler					: { id:string, name:string};					// ID and name of the person handling the order

}

export const makeNewOrder = (isCart:boolean, stage:'CART' | 'DESIGN_SUPPORT' | 'DESIGN_ACCEPTED' | 'DEPOSIT_MADE' | 'PLANS_ACCEPTED' | 'PAYMENT_COMPLETE' | 'MANUFACTURING' | 'SHIPPING' | 'DELIVERED', user:UserData) => {
	
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
    isCart:isCart,
    items:[],
    quantities:[],
    dateCreated : Date.now(),
    dateAccessed : Date.now(),
    homeAddress : homeAddress,
    shippingAddress : shipAddress,
    billingAddress : billingAddress,
    stage : isCart ? 'CART' : stage,
    initialCost: 0,
    tax : 0,
    totalCost: 0,
    deleted: false,
    userId : user.id,
		handler : {id:'', name:'Mak Studio'}
  }

	return newOrder
}

export const ORDERS_OBJ = {

	stages : {
		CART: "Still in Cart",
		DESIGN_SUPPORT: "Design Support",
		DESIGN_ACCEPTED: "Design Accepted",
		DEPOSIT_MADE: "Deposit Made",
		PLANS_ACCEPTED: "Plans accepted",
		PAYMENT_COMPLETE: "Payment complete",
		MANUFACTURING: "Manufacturing",
		SHIPPING: "Shipping",
		DELIVERED: "Delivered"
	},

	completion : {
		CART:2,
		DESIGN_SUPPORT: 15,
		DESIGN_ACCEPTED: 30,
		DEPOSIT_MADE: 45,
		PLANS_ACCEPTED: 60,
		PAYMENT_COMPLETE: 75,
		MANUFACTURING: 85,
		SHIPPING: 95,
		DELIVERED: 100
	},

	colors : {
		CART:'grey',
		DESIGN_SUPPORT: 'blue',
		DESIGN_ACCEPTED: 'yellow',
		DEPOSIT_MADE: 'orange',
		PLANS_ACCEPTED: 'blue',
		PAYMENT_COMPLETE: 'green',
		MANUFACTURING: 'yellow',
		SHIPPING: 'brown',
		DELIVERED: 'green'
	},

	icons : {
		CART:'ShoppingCart',
		DESIGN_SUPPORT: 'Palette',
		DESIGN_ACCEPTED: 'PencilRuler',
		DEPOSIT_MADE: 'CreditCard',
		PLANS_ACCEPTED: 'PencilRuler',
		PAYMENT_COMPLETE: 'CreditCard',
		MANUFACTURING: 'Clipboard',
		SHIPPING: 'Truck',
		DELIVERED: 'ClipboardCheck'
	}

}

