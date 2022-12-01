const mostCaloriesElf = (allElfCalories) => {
  const eachElfTotalCalories = [];

  for (let i = 0; i < allElfCalories.length; i++) {
    let eachElfCalories = 0;

    for (let j = 0; j < allElfCalories[i].length; j++) {
      eachElfCalories = eachElfCalories + allElfCalories[i][j];
    }
    eachElfTotalCalories.push(eachElfCalories);
  }

  console.log(Math.max(...eachElfTotalCalories));
};

export default mostCaloriesElf;
