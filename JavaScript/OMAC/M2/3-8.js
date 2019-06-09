/*
Directions:
Write a series of ternary statements that sets the variable category equal to:

"herbivore" if an animal eats plants
"carnivore" if an animal eats animals
"omnivore" if an animal eats plants and animals
undefined if an animal doesn't eat plants or animals
Use the eatsPlants and eatsAnimals variables to test your code.

TIP: Make sure to test your code with different values. For example,

If eatsPlants equals true and eatsAnimals equals false, then herbivore should be printed to the console.

 */

/*
 * Programming Quiz - Navigating the Food Chain (3-8)
 *
 * Use a series of ternary operator to set the category to one of the following:
 *   - "herbivore" if an animal eats plants
 *   - "carnivore" if an animal eats animals
 *   - "omnivore" if an animal eats plants and animals
 *   - undefined if an animal doesn't eat plants or animals
 *
 * Notes
 *   - use the variables `eatsPlants` and `eatsAnimals` in your ternary expressions
 *   - `if` statements aren't allowed ;-)
 */

// change the values of `eatsPlants` and `eatsAnimals` to test your code
var eatsPlants = false;
var eatsAnimals = true;

var category = eatsPlants && eatsAnimals ? 'omnivore' : eatsPlants ? 'herbivore' : eatsAnimals ? 'carnivore' : undefined;

console.log(category);
