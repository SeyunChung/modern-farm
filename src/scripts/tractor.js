// #4 Sowing the field:
// imported functions
import { addPlant, usePlants } from "./field.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createSunflower } from "./seeds/sunflower.js"
import { createWheat } from "./seeds/wheat.js"


//The plantSeeds function takes a yearlyPlan as parameter, which is an array representing the plan for the year.
export const plantSeeds = (yearlyPlan) => {
    for (const row of yearlyPlan) {
        for (const seed of row) {
            //As you iterate the row of food types to be planted, invoke the corresponding factory function (e.g. if the food type is "Asparagus", invoke the createAsparagus function to get an asparagus seed).
            if (seed === "Asparagus") {
            // Take that seed and add it to the array of plants in the field module.
                addPlant(createAsparagus()) //invoke the createAsparagus function to get an asparagus seed addPlant (asparagus)
            } else if (seed === "Corn") {
                addPlant(createCorn())
            } else if (seed === "Potato") {
                addPlant(createPotato())
            } else if (seed === "Soybean") {
                addPlant(createSoybean())
            } else if (seed === "Sunflower") {
                addPlant(createSunflower())
            } else if (seed === "Wheat") {
                addPlant(createWheat())
            }

        }

    }
return usePlants() 
}