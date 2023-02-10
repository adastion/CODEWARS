function getGrade(s1, s2, s3) {
  let grade = (s1 + s2 + s3) / 3;

  if (grade >= 90 || grade >= 100) {
    return 'A';
  } else if (grade >= 80 || grade > 90) {
    return 'B';
  } else if (grade >= 70 || grade > 80) {
    return 'C';
  } else if (grade >= 60 || grade > 70) {
    return 'D';
  } else if (grade >= 0 || grade > 60) {
    return 'F';
  }
}

console.log(getGrade(70, 70, 100)); 
console.log(getGrade(82, 85, 87)); 
console.log(getGrade(84, 79, 85)); 
console.log(getGrade(89, 89, 90)); 

console.log(getGrade(70, 70, 70)); 
console.log(getGrade(75, 70, 79)); 
console.log(getGrade(60, 82, 76)); 
