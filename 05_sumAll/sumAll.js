const sumAll = function (lower, upper) {
	if (typeof lower != "number" || typeof upper != "number") {
		return "ERROR";
	}

	if (!Number.isInteger(lower) || !Number.isInteger(upper)) {
		return "ERROR";
	}

	if (lower < 0 || upper < 0) {
		return "ERROR";
	}

	if (lower > upper) {
		[lower, upper] = [upper, lower];
	}

	let sum = 0;
	for (let i = lower; i <= upper; i++) {
		sum += i;
	}

	return sum;
};

// Do not edit below this line
module.exports = sumAll;
