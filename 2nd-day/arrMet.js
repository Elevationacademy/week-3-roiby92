// let ages = [12, 41, 11, 10, 32, 27, 18, 19, 19, 14, 58, 41, 9]


// //old way
// // let olderThan16 = []
// // for(let age of ages){
// //   if(age > 16){
// //     olderThan16.push(age)
// //   }
// // }


// ////ES6 new array method

// ////************ filter ******************
// // let olderThan16 = ages.filter(a => a > 16)
// ////the same but diff
// const isGreaterThan16 = function (age) {
//     return age > 16
// }
// let olderThan16 = ages.filter(isGreaterThan16)
// //notice that passing in the function will implicitly pass it the `a` parameter that the function expects

// ////spot
// let vegetables = [
//     { name: "Eggplant", color: "purple" },
//     { name: "Carrot", color: "orange" },
//     { name: "Squash", color: "orange" },
//     { name: "Tomatoe", color: "red" },
//     { name: "Onion", color: "white" },
//     { name: "Sweet Potato", color: "orange" }
// ]

// const orengVeg = vegetables.filter(v => v.color === "orange")
// console.log(orengVeg);

// ////****************** forEach *********************
// let people = [
//     { salary: 1300, goodPerformance: false },
//     { salary: 1500, goodPerformance: true },
//     { salary: 1200, goodPerformance: true },
//     { salary: 1700, goodPerformance: false },
//     { salary: 1600, goodPerformance: true },
// ]

// const bonos = people => {
//     if (people.goodPerformance) {
//         people.salary += 300
//     }
// }

// people.forEach(bonos)
// console.log(people);



// ////***************************** map **********************
// //// It's called "map" because we're "mapping" one form of data into another

// let poundWeights = [142, 180, 178, 121, 132]

// let kiloWeights = poundWeights.map(pw => Math.round(pw / 2.2))
// console.log(kiloWeights) //prints [65, 82, 81, 55, 60]

// let messagesFromDad = ["HI HONEY", "HOW WAS SCHOOL??", "DID YOU EAT TODAY?", "I CAN'T FIND THE REMOTE CONTROL"]

// let low = messagesFromDad.map(m => m.toLowerCase())
// console.log(low);

// let users = [
//     {
//         "name": "Leanne Graham",
//         "address": {
//             "street": "Kulas Light", "suite": "Apt. 556", "city": "Gwenborough", "zipcode": "92998-3874",
//             "geo": { "lat": "-37.3159", "lng": "81.1496" }
//         }
//     }, {
//         "name": "Ervin Howell",
//         "address": {
//             "street": "Victor Plains", "suite": "Suite 879", "city": "Wisokyburgh", "zipcode": "90566-7771",
//             "geo": { "lat": "-43.9509", "lng": "-34.4618" }
//         }
//     }
// ]

// users.map(u => { return { name: u.name, city: u.address.city } })

// /*
// Notice that in this case we have a return inside the callback function!
//  That is because we're creating a new object, which uses { },
//  so we need to clearly define what the callback function is, and what the object we're creating is.
//  */

// //************************ Find ***********************
// let posts = [
//     {
//         id: 0, text: "I'm not here",
//         comments: [{ id: 0, text: "support that" }]
//     },
//     {
//         id: 1, text: "Find me",
//         comments: [
//             { id: 0, text: "here I am" },
//             { id: 1, text: "rock you like a hurricane" },
//             { id: 2, text: "dum dum" }]
//     },
//     {
//         id: 2, text: "Where's waldo anyway",
//         comments: [
//             { id: 0, text: "who's waldo" },
//             { id: 1, text: "he's called Effi" }]
//     },
//     {
//         id: 3, text: "Poof",
//         comments: [{ id: 0, text: "like magic" }]
//     }
// ]

// //old syntax
// // const findById = function (id) {
// //     for (let post of posts) {
// //         if (post.id == id) {
// //             return post
// //         }
// //     }
// // }

// //ES6
// const findById = id => posts.find(p => p.id === id)
// console.log(findById(1)) // prints {id: 1, text: "Find me", comments: Array(3)}


// const findCommentByID = (posid, commentId) => posts.find(p => p.id === posid).comments.find(c => c.id === commentId)

// console.log(findCommentByID(1, 0))


// //************************ Some $ every *********************** 

// let movies = [
//     { title: "Dareangel", studio: "Marvel", year: 2023 },
//     { title: "Batterfly", studio: "Fox", year: 2021 },
//     { title: "League of Ordinary People", studio: "Blizzard", year: 2025 },
//     { title: "Thor: Ragnarok", studio: "Marvel", year: 2017 },
// ]

// if (movies.some(m => m.studio === "Marvel")) {
//     console.log("Let's go watch some movies")
// } else {
//     console.log("Let's stay home")
// }

// if (movies.every(m => m.year >= 2020)){
//     console.log("Futuristic stuff")
// }else{
//     console.log("Yawn")
// }


