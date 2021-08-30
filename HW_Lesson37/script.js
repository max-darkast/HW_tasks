const university = [
  {
    id: 1,
    faculty: "History department",
    subjects: ["The World History", "History of Rome"],
    countStudents: 44,
  },
  {
    id: 2,
    faculty: "Department of Biology",
    subjects: ["biology", "chemistry"],
    countStudents: 50,
  },
  {
    id: 3,
    faculty: "Faculty of Mathematics",
    subjects: ["mathematics", "geometry", "trigonometry"],
    countStudents: 72,
  },
  {
    id: 4,
    faculty: "Faculty of Design",
    subjects: ["ui", "ux", "graphic design"],
    countStudents: 37,
  },
];

//1.

const allFaculty = university.reduce((x, university) => {
  return [...x, university.faculty];
}, []);

console.log(allFaculty);

//2.

const allSubjects = university.reduce((x, university) => {
  return [...x, ...university.subjects];
}, []);

console.log(allSubjects);

//3.

const totalStudents = university.reduce((total, university) => {
  return total + university.countStudents;
}, 0);
console.log(totalStudents);

//4.

const getMapFromArray = university.reduce(
  (x, university) => ({ ...x, [university.faculty]: university.subjects }),
  {}
);

console.log(getMapFromArray);
