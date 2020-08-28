// localStorage.setItem('name','roi')

// localStorage.personalData = {
//     averageTimeOnSite: {unit: "hr", amt: 9},
//     probabilityOfFriends: 0.02,
//     commonKeywords: ["salsa for one", "1 vs. none Chess"]
//   }

//   let userStorage = {
//     darkMode: true,
//     showSideNav: false,
//     defaultResultCount: 9,
//     latestMarks: {
//         sectionA: 92,
//         sectionB: 11
//     },
//     cart: [
//         { id: 3112, count: 2 },
//         { id: 812, count: 16 }
//     ]
// }

// localStorage.setItem("user", JSON.stringify(userStorage))
// let last = JSON.parse(localStorage.getItem('user'))



//As well, each piece of text should be added to an array called wisdom

let wisdom = []

$('#butn').on('click', function () {
  let input = $('#input').val()
  $('#result').append(input)
  wisdom.push({ text: input })
  if (wisdom.length % 2 === 0) {
    localStorage.wisdom = JSON.stringify(wisdom)
    console.log(JSON.parse(localStorage.wisdom || "{}"))
  }
})


