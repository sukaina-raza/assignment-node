

const students = [
  { name: "Sara", marks: 45 },
  { name: "Sana", marks: 67 },
  { name: "Ali", marks: 85 },
  { name: "Inaya", marks: 96 },
  { name: "Raza", marks: 66 }
];

// Function to calculate grade based on marks
function calculateGrade(marks) {
  if (marks >= 90) return "A+";
  if (marks >= 80) return "A";
  if (marks >= 70) return "B";
  if (marks >= 60) return "C";
  return "D";
}

  // Display students
  const container = document.getElementById("students-container");
  students.forEach(student => {
    container.innerHTML += `
      <p><strong>Name:</strong> ${student.name}</p>
      
      <p><strong>Marks:</strong> ${student.marks}</p>
      <p><strong>Grade:</strong> ${calculateGrade(student.marks)}</p>
      <hr>
    `;
  });
