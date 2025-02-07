const removeFromArray = function (data, ...toDelete) {
	return data.filter((item) => !toDelete.includes(item));
};

// Do not edit below this line

module.exports = removeFromArray;
