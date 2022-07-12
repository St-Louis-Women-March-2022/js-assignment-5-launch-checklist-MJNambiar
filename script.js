// Write your JavaScript code here!
// const scriptHelper = require('./scriptHelper');

window.addEventListener("load", function() {
   
   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch();
   console.log(listedPlanetsResponse.then(result => console.log('result: ',result)));
   
   listedPlanetsResponse
   .then(function (result) {
       return result;
    //    console.log("listedplanets before then" + listedPlanets);
   })
   .then(function(listedPlanets) {
       console.log("listedPlanets after then" + listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        let chosenPlanet = pickPlanet(listedPlanets);
        addDestinationInfo(chosenPlanet);
//         //??wrong parameters for add Destination

        let form = document.querySelector("form");
        console.log('am I outside submit: ', form);

        form.addEventListener("submit", function(event) {
            console.log("is submit here?")
            let pilot = document.getElementById("pilotName");
            let copilot = document.getElementById("copilotName");
            let fuelLevel = document.getElementById("fuelLevel");
            let cargoLevel = document.getElementById("cargoMass");
            let list = document.getElementById("faultyItems");
            
            formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel);
            //list?? 
            //should be in original function
        });
    });
});

// window.addEventListener("input", () => {
//     console.log('hey I am in the input event');  
// })

// window.addEventListener("click", () => {
//     console.log('hey I am in the click event');  
// })

