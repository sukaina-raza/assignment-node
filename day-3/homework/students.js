

// Array of student objects with names and marks for three subjects
const students = [
    { name: "Ali", subjects: { Maths: 85, English: 78, Science: 92 } },
    { name: "hasan", subjects: { Maths: 92, English: 89, Science: 94 } },
    { name: "sara", subjects: { Maths: 78, English: 74, Science: 80 } },
  
  ];
  // Function to display student names and marks for three subjects
  function displayStudents(studentArray) {
    // console.log("Student Name | Math | English | Science");
    // console.log("----------------------------------------");
    studentArray.forEach(student => {
      console.log(`${student.name} \n    MATHS= ${student.subjects.Maths}\n  ENGLISH= ${student.subjects.English}\n   SCIENCE=S ${student.subjects.Science}`);
  
   
    });
  }
  // displayStudents(student);
  displayStudents(students);
  
  