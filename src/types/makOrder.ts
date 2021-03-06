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
import makOrderStatement from './makOrderStatement';

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
	statements			: makOrderStatement[];
	stage 					: 'CART' | 'DESIGN_SUPPORT' | 'DESIGN_ACCEPTED' | 'DEPOSIT_MADE' | 'PLANS_ACCEPTED' | 'PAYMENT_COMPLETE' | 'MANUFACTURING' | 'SHIPPING' | 'DELIVERED'; 
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
	    deleted: false,
    userId : user.id,
		handler : {id:'', name:'Mak Studio'},
		statements:[]
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

	tasks : {
		CART: "",
		DESIGN_SUPPORT: "View the design proposals and then either accept them or ask for changes. Designs for all items must be accepted.",
		DESIGN_ACCEPTED: "To move to the next step, a deposit amount is required. Make sure that your billing and shipping address is correct.",
		DEPOSIT_MADE: "Accept the final plans and the ability to make a final payment is enabled.",
		PLANS_ACCEPTED: "Once the final payment is made, the product will go into manufacturing and be shippind.",
		PAYMENT_COMPLETE: "Payment complete. The item(s) will be manufactured as soon as possible.",
		MANUFACTURING: "The item(s) are being manufactured. Make sure that your shipping address is correct.",
		SHIPPING: "The item(s) are being shipped!!!",
		DELIVERED: "Delivered and complete."
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

	step : {
		CART:0,
		DESIGN_SUPPORT: 1,
		DESIGN_ACCEPTED: 2,
		DEPOSIT_MADE: 3,
		PLANS_ACCEPTED: 4,
		PAYMENT_COMPLETE: 5,
		MANUFACTURING: 6,
		SHIPPING: 7,
		DELIVERED: 8
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

