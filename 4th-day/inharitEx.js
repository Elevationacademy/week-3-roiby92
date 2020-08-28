// class Person {
//     constructor(name, startYear) {
//         this.name = name
//         this.startYear = startYear
//         this.courses = []
//     }

//     addCourse(course) {
//         this.courses.push(course)
//     }
// }

// class Student extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.grades = []
//     }
//     //method overriding!
//     addCourse(course) {
//         if (this.courses.indexOf(course) == -1) {
//             super.addCourse(course)
//         }
//     }

//     receiveGrade(courseName, finalGrade) {
//         this.grades.push({
//             course: courseName,
//             grade: finalGrade
//         })
//     }
// }
// class Principal extends Person {
//     constructor(name, startYear) {
//         super(name, startYear)
//         this.teachers = []
//         this.students = []
//     }

//     hireTeacher(teacher) {
//         this.teachers.push(teacher)
//         console.log(`${this.name} just hired ${teacher.name}`);
//     }
//     recruitStudent(student) {
//         this.students.push(student)
//     }
//     expelStudent(student) {
//         for (let s in this.students) {
//             if (this.students[s].name === student.name) {
//                return this.students.splice(s, 1)
//             }
//         }
//     }

//     transferStudent(student, principal) {
//         const selectedStudent = this.expelStudent(student)
//         principal.recruitStudent(selectedStudent)
//     }


// }

// class Teacher extends Person {
//     constructor(name, startYear, salary) {
//         super(name, startYear)
//         this.salary = salary
//         this.courses = {}
//     }
//     //override the addCourse
//     addCourse(course) {
//         if (this.courses[course]) {
//             return this.courses[course]++
//         }
//         this.courses[course] = 1
//     }

//     giveGrade(student, courseName, grade) {
//         student.receiveGrade(courseName, grade)
//     }
// }
// //Grandchild of Person
// class TeachingAssistant extends Teacher {
//     constructor(name, startYear, salary) {
//         super(name, startYear, salary)
//     }
// }

// const p1 = new Principal("Martin", 1991)
// const p2 = new Principal("Martha", 1990)

// const t1 = new Teacher("Cassandra", 2002, 40000)
// const t2 = new Teacher("Kevin", 2006, 30000)

// const s1 = new Student("Ronda", 2017)
// const s2 = new Student("Byron", 2016)

// //1 & 2
// p1.hireTeacher(t1) //should print "Martin just hired Cassandra"
// console.log(p1.teachers) //should print Array(1) [Teacher] - the teacher should be Cassandra

// p1.hireTeacher(t2) //should print "Martin just hired Kevin"
// console.log(p1.teachers) //should print Array(2) [Teacher, Teacher]

// //3 & 4
// p1.recruitStudent(s1)
// p1.recruitStudent(s2)
// console.log(p1.students) //should print Array(2) [Student, Student]

// //5
// p1.expelStudent(s1)
// console.log(p1.students) //should print Array(1) [Student] - the student should be Byron

// //6
// p1.transferStudent(s2, p2)
// console.log(p1.students) //should print Array(0) []
// console.log(p2.students) //should print Array(1) [Student] - the student should be Byron
class Page{
    constructor(text){
        this.text = text
    }
}

class Notebook{
    constructor(pageNum){
        this.pageNum = pageNum
        this.pages = []
    }

    write(page){
        this.pages.push(page)
    }
}

class Diary extends Notebook{
    constructor(pageNum, owner){
        super(pageNum)
        this.owner = owner
    }
}

const myDiary = new Diary(50, "Shila")
const mathNotebook = new Notebook(200)
const p1 = new Page("Pythagoreas realized tha the sum of the squares of the sides of a right triangle will equal the square of the hypoteneuse")
myDiary.pages.push(new Page("I think I'm in love with a Greek man."))
mathNotebook.pages[0].text
console.log(myDiary.pages.text)