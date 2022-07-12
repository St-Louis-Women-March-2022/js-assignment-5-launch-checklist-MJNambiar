// Write your helper functions here!
// require('isomorphic-fetch');


//       list = screen.getByTestId(container, "faultyItems");
//       h2 = screen.getByTestId(container, "launchStatus");
//       pilotStatus = screen.getByTestId(container, "pilotStatus");
//       copilotStatus = screen.getByTestId(container, "copilotStatus");
//       fuelStatus = screen.getByTestId(container, "fuelStatus");
//       cargoStatus = screen.getByTestId(container, "cargoStatus");
//       missionTarget = screen.getByTestId(container, "missionTarget");
//   });


function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    let missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: ${name}</li>
                    <li>Diameter: ${diameter}</li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: ${distance}</li>
                    <li>Number of Moons: ${moons}</li>
                </ol>
                <img src="${imageUrl}">`
};

// function alertUser() {
//     // window.addEventListener("load", function() {
//         // let form = document.querySelector("formSubmit");
//         // console.log("form: " + form);
//         window.addEventListener("submit", function(event) {
//             let pilot = document.getElementById("pilotName");
//             let copilot = document.getElementById("copilotName");
//             let fuelLevel = document.getElementById("fuelLevel");
//             let cargoLevel = document.getElementById("cargoMass");

//             if (pilot.value === "" || copilot.value === "" || fuelLevel.value === "" || cargoLevel.value === "") {
//                 alert("All fields are required.");
//                 console.log("in alert user: ");
//                 event.preventDefault();
//             }
//         });
//     // });
// };

function validateInput(testInput) {
    let numberInput = Number(testInput);
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(numberInput)) {
        return "Not a Number";
    } else if (!isNaN(numberInput)) {
        return "Is a Number";
    } else {
        return;
    }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {

    // window.addEventListener("submit", function(event) {
         pilot = document.getElementById("pilotName");
         copilot = document.getElementById("copilotName");
         fuelLevel = document.getElementById("fuelLevel");
         cargoLevel = document.getElementById("cargoMass");
       
        if (validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty") {
            alert("All fields are required.");
            // event.preventDefault();
        } else if (validateInput(fuelLevel) === "Not a Number" || validateInput(cargoLevel) === "Not a Number") {
            alert("Field requires a number. Please enter numerical answer.");
            // event.preventDefault();
        } else if (validateInput(pilot) === "Is a Number" || validateInput(copilot) === "Is a Number") {
            alert("Field requires letters. Please only enter letters or words.");
            // event.preventDefault();
        } else {
            return;
        };

//to do: put 34-37 at beg of form submission
//if (validateInput(pilot) === "Empty" || ...all other variables...then plug in my alert 

        // document.querySelector(list);
        // do i need to re-include list?

        document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
        document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
        
        if (fuelLevel < 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for launch";
            document.getElementById("launchStatusCheck").style.color = "rgb(199, 37, 78)";
        } 
        if (cargoLevel > 10000) {
            document.getElementById("faultyItems").style.visibility = "visible";
            document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
            document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
            document.getElementById("launchStatusCheck").style.color = "rgb(199, 37, 78)";
        } else {
            document.getElementById("launchStatusCheck").style.color = "green";
            document.getElementById("launchStatusCheck").innerHTML = "Shuttle is Ready for Launch";
        }
    // });
};

async function myFetch() {
    let planetsReturned;
    console.log('are you in ther?: ')

    return await fetch("https://handlers.education.launchcode.org/static/planets.json")
    .then( function(response) {
        return response.json()
    .then(function(json) {
        return json;    
         });
    });
}

function pickPlanet(planets) {
    let index = 0;
    index = Math.floor(Math.random() * 7);
    let planetChosen = planets[index];
    console.log("planetChosen: " + planetChosen);
    
    return planetChosen;
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
