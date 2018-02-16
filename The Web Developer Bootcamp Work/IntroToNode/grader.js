function average(testScores){
    var sum = 0;
    testScores.forEach(function(score){
        sum += score;
    })
    return sum/testScores.length;
}

var scores = [1, 2, 3];
console.log(average(scores));