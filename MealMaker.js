const menu = {
	_meal: '',
	_price: 0,

	set meal(mealToCheck) {
		/*if (typeof mealToCheck === 'string') {
			return (this._meal = mealToCheck);
		} else {
			return 'pass in a string';
		}*/
		return typeof mealToCheck === 'string'
			? (this._meal = mealToCheck)
			: console.log('pass in a string for "meal"');
	},
	set price(priceToCheck) {
		/*if (typeof priceToCheck === 'number') {
			return (this._price = priceToCheck);
		} else return 'pass in a number'; */
		return typeof priceToCheck === 'number'
			? (this._price = priceToCheck)
			: console.log('pass in a number for "price!"');
	},

	get todaysSpecial() {
		if (this._meal && this._price) {
			return `Todays special is' ${this._meal} 'for ${this._price}`;
		} else {
			return 'error';
		}
	},
};

menu.meal = 22; // references line 5, "set meal"
menu.price = '5'; // references line 13, "set price"

//console.log(menu._meal);
//console.log(menu._price);

console.log(menu.todaysSpecial);
