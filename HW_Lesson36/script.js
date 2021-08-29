const courses = [
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

//1. done

//2.
const totalLived = users.reduce((total, user) => {
  return total + user.age;
}, 0);
console.log(totalLived);

//3.
const lessThanForty = users.reduce((x, user) => {
  if (user.age < 40) return [...x, user];
  return x;
}, []);
console.log(lessThanForty);
