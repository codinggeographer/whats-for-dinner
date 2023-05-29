var side = [
    "Fresh Cut Fries",
    "Garlic Mashed Potatoes",
    "Baked Mac and Cheese",
    "Caesar Salad",
    "Mixed Fruit Salad",
    "Buttered Broccoli",
    "Tomato Basil Soup",
    "Tortillas",
    "Onion Rings",
    "Arroz Con Gandules"
];

var main = [
    "Buffalo Chicken Wings",
    "New York Style Pizza",
    "Empanadas",
    "Birria Tacos",
    "Carnitas",
    "Chicken Mole",
    "Ropa Vieja",
    "Adult Grilled Cheese",
    "Ramen",
    "Mexican Baked Ziti"
];

var dessert = [
    "Cheesecake",
    "Strawberry Shortcake",
    "Peanut Butter Pie",
    "Chocolate Chunk Cookies",
    "Homemade Ice Cream",
    "Flan",
    "Churros",
    "Sopaipllla",
    "Chocolate Fudge Cake",
    "Triple Chocolate Brownies"
];

var letsCookBtn = document.querySelector('#meal-form-submit')

letsCookBtn.addEventListener('click', handleBtnClick)

function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
}

function randomizeDishItems(userChoice) {
    var randomIndex;
    var randomDish;
    if(userChoice == 'side') {
        var randomIndex = getRandomIndex(side);
        var randomDish = side[randomIndex];
    } else if (userChoice == 'main') {
        var randomIndex = getRandomIndex(main);
        var randomDish = main[randomIndex];
    } else if (userChoice == 'dessert') {
        var randomIndex = getRandomIndex(dessert);
        var randomDish = dessert[randomIndex]
    } else {

    }
    return randomDish
}

function handleBtnClick(event) {
    event.preventDefault();
    var userChoice = document.querySelector('input[name="dish"]:checked').value;
    var randomDish = randomizeDishItems(userChoice)
    pupulateRandomDish(randomDish)
}

function pupulateRandomDish(randomDish) {
    var hide = document.querySelector('.cookpot')
    hide.classList.add('hidden')
    var textSrc = document.getElementsByClassName('populate-meal');
    textSrc[0].innerText = `You should make: ${randomDish}`
}

  
//  function createMeal(side, main, dessert) {
//     return {
//       id: Date.now(),
//       side: side,
//       main: main,
//       dessert: dessert,
//     };
//   }