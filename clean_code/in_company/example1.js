if (score >= 90) {
  grade = "A";
} else {
  if (score >= 80) {
    grade = "B";
  } else {
    if (score >= 70) {
      grade = "C";
    } else {
      if (score >= 60) {
        grade = "D";
      } else {
        grade = "F";
      }
    }
  }
}

//
grade =
  score >= 90
    ? "A"
    : score >= 80
    ? "B"
    : score >= 70
    ? "C"
    : score >= 60
    ? "D"
    : "F";
