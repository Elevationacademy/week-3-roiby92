class Person {
    constructor(name, startYear) {
        this.name = name
        this.startYear = startYear
        this.courses = []
    }

    addCourse(course) {
        this.courses.push(course)
    }
}

class Student extends Person {
    constructor(name, startYear) {
        super(name, startYear)
        this.grades = []
    }
    //method overriding!
    addCourse(course) {
        if (this.courses.indexOf(course) == -1) {
            super.addCourse(course)
        }
    }

    receiveGrade(courseName, finalGrade) {
        this.grades.push({
            course: courseName,
            grade: finalGrade
        })
    }
}


class Teacher extends Person {
    constructor(name, startYear, salary) {
        super(name, startYear)
        this.salary = salary
        this.courses = {}
    }
    //override the addCourse
    addCourse(course) {
        if (this.courses[course]) {
            return this.courses[course]++
        }
        this.courses[course] = 1
    }

    giveGrade(student, courseName, grade) {
        student.receiveGrade(courseName, grade)
    }
}
//Grandchild of Person
class TeachingAssistant extends Teacher {
    constructor(name, startYear, salary) {
        super(name, startYear, salary)
    }
}

const s1 = new Student("Ronda", 2017)
// console.log(s1.name) //prints "Ronda"

// s1.addCourse("Algebra II")
// console.log(s1.courses) //prints ["Algebra II"] 
// const p1 = new Person("Roi",2020)
// const s1 = new Student("Ronda", 2017)
// const t1 = new Teacher("Cassandra", 2002, 40000)

// t1.giveGrade(s1, "Algebra II", 82)
// const firstGrade = s1.grades[0]

// console.log(`${s1.name} received an ${firstGrade.grade} in ${firstGrade.course}`)
// //above should print "Ronda received an 82 in Algebra II"﻿

// console.log(s1.grades);


// console.log(s1 instanceof Student) //prints true

// s1 instanceof Person //true
// t1 instanceof Teacher//true
// t1 instanceof Person//true
// s1 instanceof Teacher//false
// t1 instanceof Student//false
// p1 instanceof Person//true
// p1 instanceof Student//false
// p1 instanceof Teacher//false

// // s1 instanceof p1//Error, cannot be cuz p1 is instance himself
// const t1 = new Teacher("Cassandra", 2002, 40000)
// t1.addCourse("Algebra II")
// t1.addCourse("Algebra II")
// t1.addCourse("Trigonometry")
// console.log(t1.courses) //should print {Algebra II: 2, Trigonometry: 1}


//Grand-child example
const ta1 = new TeachingAssistant("Brandon", 2014, 20000)

ta1.addCourse("General Relativity")
ta1.giveGrade(s1, "General Relativity", 91)

console.log(ta1.salary) //prints 20000
console.log(ta1.courses) //prints {"General Relativity": 1}
console.log(s1.grades) //prints [{course: "General Relativity", grade: 91}]