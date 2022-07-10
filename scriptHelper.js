// Write your helper functions here!
// require('isomorphic-fetch');


// await new Promise (resolve => {
//     window.addEventListener('load', resolve);
//       container = dom.window.document.body;
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

function alertUser () {
    console.log("in alert user: ")
    window.addEventListener("load", function() {
        let form = document.querySelector("formSubmit");

        form.addEventListener("submit", function(event) {

            let pilotName = document.getElementById("pilotName");
            let copilotName = document.getElementById("copilotName");
            let fuelLevel = document.getElementById("fuelLevel");
            let cargoMass = document.getElementById("cargoMass");

            if (pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" || cargoMass.value === "") {
                alert("All fields are required.");
                event.preventDefault();
            }
        });
    });
};

function validateInput(testInput) {
    if (testInput === "") {
        return "Empty";
    } else if (isNaN(testInput)) {
        return "Not a Number";
    } else if (!isNaN(testInput)) {
        return "Is a Number";
    } else {
        return;
    }
};


function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
    alertUser();
    let testInput = [pilot, copilot, fuelLevel, cargoLevel];
    validateInput(testInput);

    document.querySelector(list);

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
};


async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        response.json().then(function (json){
            console.log("json: " + JSON.stringify(json));
            console.log("response: " + response.json);
            return json;
            // ??
        });
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    let index = 0;
    index = Math.floor(Math.random() * 7);
    console.log("planets" + planets);
    let planetChosen = planets[index];
    
    return planetChosen;
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
