function points(games) {
  let totalPoints = 0;

  for (let i = 0; i < games.length; i++) {
    let [x, y] = games[i].split(':').map(Number);

    if (x > y) {
      totalPoints += 3; // win
    } else if (x === y) {
      totalPoints += 1; // tie
    }
    // No points for a loss (x < y)
  }

  return totalPoints;
}
console.log(points(["4;5","4:5","5:6","7:8","8:9","3:4","9:10","3:7","3:6","6:6"]));

