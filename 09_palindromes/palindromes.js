const palindromes = function (string) {
	let stripped = string.replace(/[!,\.\s*]/g, "").toLowerCase();
	let reversed = stripped.split("").reverse().join("");
	return stripped === reversed;
};

// Do not edit below this line
module.exports = palindromes;
