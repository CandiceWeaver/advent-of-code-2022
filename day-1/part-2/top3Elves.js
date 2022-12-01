const top3Elves = (allElfCalories) => {
  const eachElfTotalCalories = [];
  const top3ElfCalories = [];

  for (let i = 0; i < allElfCalories.length; i++) {
    let eachElfCalories = 0;

    for (let j = 0; j < allElfCalories[i].length; j++) {
      eachElfCalories = eachElfCalories + allElfCalories[i][j];
    }
    eachElfTotalCalories.push(eachElfCalories);
  }

  const findTop3Elves = () => {
    if (top3ElfCalories.length < 3) {
      for (let i = 0; i < eachElfTotalCalories.length; i++) {
        let highestNumber = Math.max(...eachElfTotalCalories);

        if (eachElfTotalCalories[i] === highestNumber) {
          top3ElfCalories.push(highestNumber);

          eachElfTotalCalories.splice(i, 1);

          break;
        }
      }
    }
  };

  findTop3Elves();
  findTop3Elves();
  findTop3Elves();

  const top3ElfTotalCalories = top3ElfCalories.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  console.log(top3ElfTotalCalories);
};

export default top3Elves;
