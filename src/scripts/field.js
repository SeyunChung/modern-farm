//#3: Tilling the field
// Declares an empty array named "plantArray"
// store all of the plants that are growing in the field.
let plantArray = []

/*
define and export a function named addPlant,
which accepts one of the seed objects as parameter and 
will add the seed to the plantArray array using .push method. 
But, corn is an array of objects, so must use the Array.isArray method to check 
if corn was passed in.
*/
export const addPlant = (seed) => {
    if (Array.isArray(seed)) { //checking to see if seed is an array
        //If it is an array, we push all its elements to the plantArray using the spread operator (...).
        plantArray.push(...seed);
        //if seed is an array(true), push each element of the corn array into the plantArray array.
        //plantArray.push(seed[0])
        //plantArray.push(seed[1])
    }
    else {//if seed is not an array, it is an object. Push the object into the plantArray array.
        plantArray.push(seed)
    }
}

//Define and export a function named usePlants:
    //takes no parameters
    //returns a copy of plantArray
export const usePlants = () => {
    const plantsArray = plantArray;
    return plantsArray;
}

