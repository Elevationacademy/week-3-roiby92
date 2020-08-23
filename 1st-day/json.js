let recipe = {
    "name": "Mashed Potatoes",
    "serves": 4,
    "ingredients": [
        {
            "name": "water"
        },
        {
            "name": "potatoes",
            "count": 2
        },
        {
            "name": "butter",
            "count": 2,
            "unit": "tablespoons"
        },
        {
            "name": "salt",
            "count": 0.5,
            "unit": "teaspoon"
        },
        {
            "name": "pepper",
            "count": 0.25,
            "unit": "teaspoons"
        },
        {
            "name": "garlic powder",
            "count": 2,
            "unit": "teaspoons"
        }
    ],
    "directions": [
        "Cut potatoes into half inch thick slices",
        "Add potatoes to a pot and cover with an inch of water.",
        "Bring the water to a boil over high heat, then reduce to a simmer and cover.",
        "Simmer for 20 minutes or until potatoes are fork tender.",
        "Drain water from potatoes, leaving the potatoes in the original pot.",
        "Add remaining ingredients to the pot with the potatoes.",
        "Mash potatoes until they reach the desired consistency.",
        "Serve immediately, or cover and refrigerate."
    ],
    "calories": "This contains 250 calories",
    "healthy": "It is a healthy meal"
}



console.log(recipe.ingredients.filter(i => i.name == "garlic powder")[0].count) //should print 2
console.log(recipe.healthy) //should print true
console.log(recipe.calories) //should print 250
console.log(recipe.directions[0]) //should print "Cut potatoes into half inch thick slices"



let animals = [
    {
        "name": "Dog",
        "kind": "Golden Retriever",
        "weigh(K)": 30,
        "lives_in": "home",
        "endangered": "true",
        "food": ["bonzo", "meet"],
        "cam_be_etaen": ["laion", "tiger"],
        "delicious": 1
    },
    {
        "name": "Cow",
        "weigh(K)": 1000,
        "lives_in": "cowshed",
        "endangered": false,
        "food": ["Leaves", "hay"],
        "cam_be_etaen": ["pepole", "tiger"],
        "delicious": 5
    },
    {
        "name": "Elephant",
        "weigh(K)": 7000,
        "lives_in": "Jungle",
        "endangered": "true",
        "food": ["Leaves", "frutis"],
        "cam_be_etaen": ["laion", "tiger"],
        "delicious": 2
    },
    {
        "name": "Gray Wolf",
        "weigh(K)": 50,
        "lives_in": "muntens",
        "endangered": false,
        "food": ["bambi", "zebra"],
        "cam_be_etaen": ["laion", "tiger"],
        "delicious": 2
    },
    {
        "name": "Squirrel",
        "weigh(K)": 2,
        "lives_in": "tree",
        "endangered": "false",
        "food": ["Leaves", "nuts"],
        "cam_be_etaen": ["egale", "snake"],
        "delicious": 2
    }]

// console.log(animals[0].food.length)
// let sum
// for (i in animals) {
//     for(j in animals[i]){
//         if (animals[i].j.food === "food") 
//         {
//             sum += animals[i].food.length
//             console.log(sum)
//         }

//     }
// }


for (animal of animals) {
    if (animal.food.length > 0) {
        let sum = animal.food.length
        console.log(sum, animal.name)
    }
}
