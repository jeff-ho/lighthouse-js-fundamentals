const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

//while loop to prince out all the ingredients 
let i = 0 

while(var i < ingredients.length) {
  let i = 0
  console.log(ingredients[i])
  i++
} 

//for loop to do the same
for (var i=0 ; i < ingredients.length; i++) {
  console.log(ingredients[i])
}  

//for loop to display ingredients array backwards
for (var i = ingredients.length - 1 ; i >=0 ; i--) {
  console.log(ingredients[i])
}