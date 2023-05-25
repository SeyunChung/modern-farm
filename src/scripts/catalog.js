// Define and export a catalog function.
// The catalog function should accept the harvested food array as input.
// The catalog function should iterate the array of food objects.

//let main = document.querySelector(".container")

export const catalog = (harvestPlants) => {
    let catalogHTML = ""
    // iterate through each of the harvested plants in the array, add each plant to the HTML string in its own section
    for (const harvest of harvestPlants) {
       catalogHTML += `<section class="plant">${harvest.type}</section>`
    }
    return catalogHTML
}
