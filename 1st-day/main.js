// // const menuData = {
// //     menu: [
// //         { name: "Google", link: "http://google.com",socialNetwork:true },
// //         { name: "Facebook", link: "http://facebook.com" ,socialNetwork:false},
// //         { name: "Instagram", link: "http://nstagram.com" ,socialNetwork:true},
// //         { name: "Twitter", link: "http://twitter.com" ,socialNetwork:false},
// //     ]
// // };

// // const source = $('#menu-template').html();
// // const template = Handlebars.compile(source);
// // const newHTML = template(menuData);

// // // append our new html to the page
// // $('.menu').append(newHTML);


// // const classData = {
// //     classmates: [
// //         { name: "That on gal", description: "Always has the ansswer" },
// //         { name: "The weird dude", description: "Quick with a smile" },
// //         { name: "Taylor", description: "Just Taylor" }
// //     ]
// // }

// // const source = $('#class-template').html()
// // const template = Handlebars.compile(source)
// // const studentHtml = template(classData)

// // $('.students').append(studentHtml)


// // // this is example of rendering 2 diff templates!!
// // const renderFirst = function(){
// //     const source = $('#first-template').html();
// //     const template = Handlebars.compile(source);
// //     let newHTML = template({ text: "This gets rendered" });
// //     $('body').append(newHTML);  
// //   }
  
// //   const renderSecond = function(){
// //     const source = $('#second-template').html();
// //     const template = Handlebars.compile(source);
// //     let newHTML = template({ moreText: "This also gets rendered" });
// //     $('#special').append(newHTML);  
// //   }
  
// //   renderFirst()
// //   renderSecond()



// const animals = {animal:["Rabbit", "Giraffe", "Kangaroo", "Whale", "Seagull", "Caterpie"]}

// const languages ={langu: ["French", "Spanish", "Togolese", "Javascript", "Uruk"]}
  


// const renderAnimals = function(){
//     const source = $('#animals-template').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template(animals);
//     $('#animals').append(newHTML)
// }

// const renderlang = function(){
//     const source = $('#langu-tamplate').html();
//     const template = Handlebars.compile(source);
//     let newHTML = template(languages);
//     $('#langu').append(newHTML)
// }

// renderAnimals()
// renderlang()