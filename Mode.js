function gradeMode(grades) {
  var sortedGrades = grades.sort();
  var modes = {};


  for (var i = 0; i < sortedGrades.length; i ++) {
    if (modes[sortedGrades[i]] === undefined) {
      modes[sortedGrades[i]] = 0
    }

    if (sortedGrades[i] === sortedGrades[i - 1]) {
      modes[sortedGrades[i]] += 1;
    }
  }

  var modeCounter = 0;
  var mode;

  for (var key in modes) {
    if (modes[key] > modeCounter) {
    	modeCounter = modes[key];
      console.log(modes[key])
      mode = key;
    }
  }

  return mode;

}

var grades = [94, 64, 72, 89, 65, 84, 92, 84, 82];
gradeMode(grades)