const calculateTotalScore = (array) => {
  let ownTotalScore = 0;

  for (let i = 0; i < array.length; i++) {
    let tempNumber;
    let tempArray = [];

    // Opponent's scores
    if (array[i][0] === "A") {
      tempNumber = +array[i][0].replace("A", "1");
      tempArray.push(tempNumber);
    } else if (array[i][0] === "B") {
      tempNumber = +array[i][0].replace("B", "2");
      tempArray.push(tempNumber);
    } else {
      tempNumber = +array[i][0].replace("C", "3");
      tempArray.push(tempNumber);
    }

    // Own scores
    if (array[i][1] === "X") {
      tempNumber = +array[i][1].replace("X", "1");
      tempArray.push(tempNumber);
    } else if (array[i][1] === "Y") {
      tempNumber = +array[i][1].replace("Y", "2");
      tempArray.push(tempNumber);
    } else {
      tempNumber = +array[i][1].replace("Z", "3");
      tempArray.push(tempNumber);
    }

    // Adding points for outcome of match
    if (tempArray[0] < tempArray[1]) {
      ownTotalScore = ownTotalScore + tempArray[1] + 6;
    } else if (tempArray[0] === tempArray[1]) {
      ownTotalScore = ownTotalScore + tempArray[1] + 3;
    } else {
      ownTotalScore = ownTotalScore + tempArray[1] + 0;
    }
  }

  console.log(ownTotalScore);
};

export default calculateTotalScore;

// A = 1;
// B = 2;
// C = 3;

// X = 1;
// Y = 2;
// Z = 3;

// lose = 0;
// draw = 3;
// win = 6;
