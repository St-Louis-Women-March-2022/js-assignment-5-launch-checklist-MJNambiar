// Write your JavaScript code here!
const scriptHelper = require('./scriptHelper');

window.addEventListener("load", function() {

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = scriptHelper.myFetch();
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = scriptHelper.pickPlanet(listedPlanets);
        scriptHelper.addDestinationInfo(chosenPlanet);
        //??wrong parameters for add Destination
        scriptHelper.formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
   
    });
});