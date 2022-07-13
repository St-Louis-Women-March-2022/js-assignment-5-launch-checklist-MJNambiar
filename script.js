// Write your JavaScript code here!
// const scriptHelper = require('./scriptHelper');

window.addEventListener("load", function() {
   
   let listedPlanets;
   let listedPlanetsResponse = myFetch();

   listedPlanetsResponse.then(function (result) {
        return result;
   }) .then(function(listedPlanets) {
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(document, chosenPlanet.name, chosenPlanet.diameter, chosenPlanet.star, chosenPlanet.distance, chosenPlanet.moons, chosenPlanet.image);


        let form = document.querySelector("form");
        console.log('am I outside submit: ', form);
        // let pilot = document.getElementById("pilotName").value;
        // console.log(pilot);
        // let pilot1 = form.elements["pilotName"];
        // console.log(pilot1);
        // console.log(pilot1.value);

        form.addEventListener("submit", function(event) {
            console.log("am I inside submit function?");
            //CANT GET INSIDE HERE YET>>>>>
            let pilot = form.elements["pilotName"].value;
            let copilot = form.elements["copilotName"].value;
            let fuelLevel = form.elements["fuelLevel"].value;
            let cargoLevel = form.elements["cargoMass"].value;
            let list = document.getElementById("faultyItems");
            // let pilot = document.getElementById("pilotName").value;
            // let copilot = document.getElementById("copilotName").value;
            // let fuelLevel = document.getElementById("fuelLevel").value;
            // let cargoLevel = document.getElementById("cargoMass").value;
            // let list = document.getElementById("faultyItems").value;
            
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
            // event.preventDefault();
            console.log("do I get here?");
   
        });
    });
});

// window.addEventListener("input", () => {
//     console.log('hey I am in the input event');  
// })

// window.addEventListener("click", () => {
//     console.log('hey I am in the click event');  
// })

