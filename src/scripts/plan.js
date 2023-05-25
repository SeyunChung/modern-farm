// Declares constant variable named types that contains an array of strings.
// Each string represents the name of a crop.
const types = ["Soybean", "Corn", "Asparagus", "Wheat", "Potato", "Sunflower"]


// Returns an array of 3 arrays, each with 6 random strings from the types array.
// Randomized "Crop" Strings
 export const createPlan = () => {
    const plan = []
    for (let i = 0; i < 3; i++) { 
        const row = []
        for (let j = 0; j < 6; j++) { 
            row.push(crop.next().value) // adds randomly selected crop to the 'row' array
        }
        plan.push(row) // adds the 'row' array to 'plan' array
    }
    return plan // returns the plan array as the output of the createPlan function
}
/*
    This is a generator function used to randomly
    generate crop types to plants in each plot. It
    is not relevant for you implementing your code
    for this project.
*/
const crop = function* () {
    while (true) {
        const typeIdx = Math.floor(Math.random() * types.length)
        yield types[typeIdx]
    }
}()