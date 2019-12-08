function tickets(peopleInLine){
  let changeJar = {
    twentyFive: 0,
    fifty: 0,
    oneHundred: 0
  };
  for (let i = 0; i < peopleInLine.length; i++) {
    if (peopleInLine[i] === 25) {
      changeJar.twentyFive += 1;
    } else if (peopleInLine[i] === 50) {
      changeJar.twentyFive -= 1;
      changeJar.fifty += 1;
    } else {
      if (changeJar.fifty > 0 && changeJar.twentyFive > 0) {
        changeJar.twentyFive -= 1;
        changeJar.fifty -= 1;
        changeJar.oneHundred += 1;
      } else {
        changeJar.twentyFive -= 3;
        changeJar.oneHundred += 1;
        console.log(changeJar);
      };
    };
    if (changeJar.twentyFive < 0 || changeJar.fifty < 0 ) {
      return "NO"
    };
  };
  return 'YES';
};
