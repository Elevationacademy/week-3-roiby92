// $.get("https://www.googleapis.com/books/v1/volumes?q=Name of the Wind:0439023521", function(result){
//     console.log(result.items[0].volumeInfo.description)
// })


// //request the data with a GET request
// $.get("https://jsonplaceholder.typicode.com/users", function(users){
//   //extract the geo data of the first user
// ﻿
//   let lat = users[0].address.geo.lat
//   let long = users[0].address.geo.lng
//   let catchPhrase = users[users.length-1].company.catchPhrase
//   //log the data
//   //console.log(`${lat}, ${long}`) //prints -37.3159, 81.1496
//   console.log(catchPhrase);
// })

//ex 1-3
// const getUrl = function (queryType, queryValue) {
//     if (queryType === 'isbn') {
//         return `https://www.googleapis.com/books/v1/volumes?q=isbn:${queryValue}`
//     }
//     return `https://www.googleapis.com/books/v1/volumes?q=${queryType}:${queryValue}`
// }

// const getData = function (data) {
//     let author
//     let title
//     let isbn
//     for (let i in data.items) {
//         author = data.items[i].volumeInfo.authors
//         title = data.items[i].volumeInfo.title
//         isbn = data.items[i].volumeInfo.industryIdentifiers[0].identifier
//     }
//     console.log(`author :${author}\n title: ${title}\n isbn: ${isbn}`)
// }



// const fetch = function (queryType, queryValue) {
//     $.ajax({
//         method: "GET",
//         url: getUrl(queryType, queryValue),
//         success: getData,
//         error: function (xhr, text, error) {
//             console.log(text)
//         }
//     })
// }

// fetch("title", "The Wise Man's Fears")
// fetch("isbn", 9789814561778)
// fetch("title", "How to Win Friends and Influence People")


//ex4
const getUrl = function (){
    const gifName = $('#gif-name').val()
    return `https://api.giphy.com/v1/gifs/search?api_key=Uz98kxLMigspHK47y4qiiDmzIMpgpenk&q=${gifName}&limit=25&offset=0&rating=g&lang=en`
}


const getGif = function (respons) {
    const gif = `${respons.data[0].embed_url}`
    const source = $('#gif-tamplate').html()
    const template = Handlebars.compile(source)
    const gifHtml = template(gif)
    $('body').append(gifHtml)
}


const fetch = function () {
    $.ajax({
        method: "GET",
        url: getUrl(),
        success: getGif,
        error: function (xhr, text, error) {
            console.log(text)
        }
    })
}
