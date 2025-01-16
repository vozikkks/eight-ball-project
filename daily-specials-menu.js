const menu = {
    _meal: '',
    _price: 0,

    set meal(mealToCheck) {
        if (typeof mealToCheck === 'string') {
            this._meal = mealToCheck;
        }
    },

    set price(priceToCheck) {
        if (typeof priceToCheck === 'number') {
            this._price = priceToCheck;
        }
    },

    //getter to display the daily special if both meal and price are set
    //returns an error message if either is not set correctly
    get todaysSpecial() {
        if (this._meal && this._price) {
            return `Today's Special is ${this._meal} for $${this._price}!`;
        } else {
            return 'Meal or price was not set correctly!';
        }
    }
};

// Example usage:
menu.meal = 'Spaghetti';
menu.price = 5;

console.log(menu.todaysSpecial);