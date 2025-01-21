// Simulating student and subject data
function getStudents() {
    let students = [
        { id: 1, name: "Ali" },
        { id: 2, name: "Hasan" },
        { id: 3, name: "Abbas" },
        { id: 4, name: "Sana" },
        { id: 5, name: "Sara" },
    ];
    return Promise.resolve(students);
}

function getSubjects() {
    let subjects = ["Mathematics", "Science", "History", "Geography", "English"];
    return Promise.resolve(subjects);
}

function markAttendance(student, subject) {
    // Hardcoded attendance records
    let attendanceRecords = {
        "Ali": {
            Mathematics: "90%",
            Science: "85%",
            History: "88%",
            Geography: "92%",
            English: "95%",
        },
        "Hasan": {
            Mathematics: "80%",
            Science: "87%",
            History: "89%",
            Geography: "91%",
            English: "93%",
        },
        "Abbas": {
            Mathematics: "85%",
            Science: "83%",
            History: "84%",
            Geography: "86%",
            English: "88%",
        },
        "Sana": {
            Mathematics: "89%",
            Science: "82%",
            History: "81%",
            Geography: "90%",
            English: "92%",
        },
        "Sara": {
            Mathematics: "87%",
            Science: "88%",
            History: "90%",
            Geography: "85%",
            English: "94%",
        },
    };

    // Resolve attendance for the specific student and subject
    return Promise.resolve({
        studentName: student.name,
        subject: subject,
        attendance: attendanceRecords[student.name][subject],
    });
}

// Async function to print attendance for all students in all subjects
async function markAllAttendance() {
    try {
        let students = await getStudents();
        let subjects = await getSubjects();

        for (let student of students) {
            console.log(`Attendance for ${student.name}:`);
            for (let subject of subjects) {
                let result = await markAttendance(student, subject);
                console.log(`- ${result.subject}: ${result.attendance}`);
            }
            console.log("----------------------------");
        }
    } catch (error) {
        console.error("Error marking attendance:", error);
    }
}

// Call the function
markAllAttendance();
