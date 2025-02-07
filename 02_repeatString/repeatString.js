const repeatString = function (toRepeat, number) {
	if (number < 0) {
		return "ERROR";
	}

	let ret = "";
	for (let i = 0; i < number; i++) {
		ret += toRepeat;
	}
	return ret;
};

repeatString("5", 5);

// Do not edit below this line
// module.exports = repeatString;
