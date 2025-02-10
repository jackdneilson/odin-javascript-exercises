const findTheOldest = function (people) {
	return people.reduce((prev, current) =>
		getAge(current) > getAge(prev) ? current : prev,
	);
};

const getAge = function (person) {
	let yearOfDeath = person.yearOfDeath ?? new Date().getFullYear();
	return yearOfDeath - person.yearOfBirth;
};

// Do not edit below this line
module.exports = findTheOldest;
