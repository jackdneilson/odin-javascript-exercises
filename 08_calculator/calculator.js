const add = function (left, right) {
	return left + right;
};

const subtract = function (left, right) {
	return left - right;
};

const sum = function (toSum) {
	return toSum.reduce((sum, current) => sum + current, 0);
};

const multiply = function (toMultiply) {
	return toMultiply.reduce((sum, current) => sum * current, 1);
};

const power = function (base, exponent) {
	return base ** exponent;
};

const factorial = function (number) {
	let ret = 1;
	for (let i = 2; i <= number; i++) {
		ret = ret * i;
	}
	return ret;
};

// Do not edit below this line
module.exports = {
	add,
	subtract,
	sum,
	multiply,
	power,
	factorial,
};
