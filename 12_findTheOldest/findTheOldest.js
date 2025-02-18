const findTheOldest = function (people) {
  const currentYear = new Date().getFullYear();
  return people.reduce((oldest, person) => {
    const oldestAge = (oldest.yearOfDeath || currentYear) - oldest.yearOfBirth;
    const currentAge = (person.yearOfDeath || currentYear) - person.yearOfBirth;
    return currentAge > oldestAge ? person : oldest;
  });
};

// Do not edit below this line
module.exports = findTheOldest;
