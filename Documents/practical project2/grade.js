const students = [
  { name: "Aline", score: 91 },
  { name: "Eric", score: 47 },
  { name: "Grace", score: 76 },
  { name: "Jean", score: 58 },
  { name: "Diane", score: 83 },
];

let total = 0;
let passed = 0;
let best = students[0];

for (const student of students) {
  let grade;
  if (student.score >= 80) grade = "A";
  else if (student.score >= 70) grade = "B";
  else if (student.score >= 60) grade = "C";
  else if (student.score >= 50) grade = "D";
  else grade = "F";

  if (student.score >= 50) passed++;
  if (student.score > best.score) best = student;
  total += student.score;

  console.log(`${student.name.padEnd(6)} ${student.score}  ${grade}`);
}

const average = total / students.length;

console.log("-------------------");
console.log(`Total score: ${total}`);
console.log(`Average: ${average.toFixed(1)}`);
console.log(`Passed: ${passed}/${students.length}`);
console.log(`Top student: ${best.name} (${best.score})`);


const expected = {
  total: 355,
  average: 71,
  passed: 4,
  topStudent: "Aline",
  topScore: 91,
};

const actual = {
  total,
  average,
  passed,
  topStudent: best.name,
  topScore: best.score,
};

const assert = require("node:assert/strict");
assert.deepEqual(actual, expected, "Grade report summary should match the verified results.");
console.log("Verification: all expected results passed.");