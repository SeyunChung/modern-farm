// import the createPlan() function from plan.js and assign it to the variable yearlyPlan
import { createPlan } from './plan.js'
import { plantSeeds } from "./tractor.js"
/* import { usePlants, addPlant } from "./field.js" - #3 Tilling the field 
   not required because we used it on tractor.js */
import { harvestPlants } from './harvester.js'
import { catalog } from './catalog.js'

/* #1 Harvest Plan: imported function createPlan, 
invoked it and stored value in variable named yearlyPlan. 
Used console.log to output the value of yearlyPlan. */
const yearlyPlan = createPlan(); // 3 nested arrays of 6 randomized crop strings each -> Pass into plantSeeds 
//console.log(yearlyPlan)



/*
declares a variable named plantedSeeds and assigns it the result of calling the plantSeeds() function from the tractor.js module.
This function takes the yearlyPlan as an argument and 
returns an Array of currently growing plant objects
*/
const plantedSeeds = plantSeeds(yearlyPlan)

//Array of plant yield after harvest
const harvestedPlants = harvestPlants(plantedSeeds)


const catalogs = catalog(harvestedPlants) // required to show the HTML
const element =document.querySelector(".container") 
element.innerHTML = catalogs
