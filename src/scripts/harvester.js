//In this module, define and export a harvestPlants function.
//The harvestPlants function must accept the plants array as input.
//The function will return an array of seed objects.
export const harvestPlants = (plantArray) => {
    let outputArray = [] // array of seed objects. empty array to store the harvested plants
    // Iterate the array of growing plants. On each plant, get the value of the output property.
    for (const plant of plantArray) {  // looping though each plant of plantsArray
        let output = plant.output //this gives us the output number (or the number of plants to harvest)
        // exception is corn. Half of your corn will be sold to cattle ranchers, so only half of the output of each corn plant will be added to the array that this function returns
        if (plant.type === "Corn") {
            output /= 2
        } 
        // Add that many of the plant objects to the array that the function returns
        for (let i = 0; i < output; i++) {
            outputArray.push(plant)
        }
    }
    return outputArray // array of seed objects
}