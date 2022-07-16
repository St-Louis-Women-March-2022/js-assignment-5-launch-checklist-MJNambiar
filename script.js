// Write your JavaScript code here!
// const scriptHelper = require('./scriptHelper');

window.addEventListener("load", function() {
   
    let form = document.querySelector("form");
    
    form.addEventListener("submit", function(event) {
        event.preventDefault();
        
        let pilot = form.elements["pilotName"].value;
        let copilot = form.elements["copilotName"].value;
        let fuelLevel = form.elements["fuelLevel"].value;
        let cargoLevel = form.elements["cargoMass"].value;
        let list = document.getElementById("faultyItems");
     
        formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
        
    });

    
   let listedPlanets;
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
        return result;
   }) .then(function(listedPlanets) {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);

        });
    });

