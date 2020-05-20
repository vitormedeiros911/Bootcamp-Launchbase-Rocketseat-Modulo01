const classA = [
    {
        name: "X",
        grade: "8"
    },
    {
        name: "Y",
        grade: "4"
    },
    {
        name: "Z",
        grade: "9.8"
    },
    {
        name: "E",
        grade: "10"
    }
]

const classB = [
    {
        name: "A",
        grade: "8.1"
    },
    {
        name: "B",
        grade: "6.4"
    },
    {
        name: "C",
        grade: "3"
    }
]

function calculateAverage(students) {
    let sum = 0
    for (let i = 0; i < students.length; i++) {
        sum = sum + students[i].grade
    }

    const average = sum / students.length
    return average
}

function sendMessage(average, turma) {
    if (average > 5) {
        console.log(` ${turma} average: ${average}`)
    }
    else {
        console.log(` ${turma} average: ${average} is not good`)
    }
}


function markASflunked(student) {
    student.flunked = false
    if (student.grade < 5) {
        student.flunked = true
    }
}

function sendFlunkedMessage(student) {
    if (student.flunked) {
        console.log(`The student ${student.name} is flunked`)
    }
}

function studentsflunkeds(students) {
    for (let student of students) {
        markASflunked(student)
        sendFlunkedMessage(student)
    }
}

const average1 = calculateAverage(classA)
const average2 = calculateAverage(classB)

sendMessage(average1, "class A")
sendMessage(average2, "class B")

studentsflunkeds(classA)
studentsflunkeds(classB)