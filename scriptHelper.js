// Write your helper functions here!
// require('isomorphic-fetch');


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
   
        if (
            validateInput(pilot) === "Empty" || 
            validateInput(copilot) === "Empty" || 
            validateInput(fuelLevel) === "Empty" || 
            validateInput(cargoLevel) === "Empty") {

            alert("All fields are required.");

        } else if (
            (validateInput(fuelLevel) === "Not a Number" || 
            validateInput(cargoLevel) === "Not a Number") &&
            (validateInput(pilot) === "Is a Number" || 
            validateInput(copilot) === "Is a Number")) {

            alert("Names require letter inputs. Amounts require number inputs. Please enter the correct corresponding inputs.");
        } else if (
            validateInput(fuelLevel) === "Not a Number" || 
            validateInput(cargoLevel) === "Not a Number") {
                
            alert("Amounts require number inputs. Please enter the correct corresponding inputs.");

        } else if (
            validateInput(pilot) === "Is a Number" || 
            validateInput(copilot) === "Is a Number") {

            alert("Names require letter inputs. Please enter the correct corresponding inputs.");

        } else {
        
            if (Number(fuelLevel) < 10000 && Number(cargoLevel) <= 10000) {

                list.style.visibility = "visible";
                document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
                document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
                document.getElementById("fuelStatus").innerHTML = "Fuel level too low for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for launch";
                document.getElementById("launchStatusCheck").style.color = "rgb(199, 37, 78)";

            } else if (Number(cargoLevel) > 10000 && Number(fuelLevel) >= 10000) {

                list.style.visibility = "visible";
                document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot} is ready for launch`;
                document.getElementById("copilotStatus").innerHTML = `Co-pilot ${copilot} is ready for launch`;
                document.getElementById("cargoStatus").innerHTML = "Cargo mass too heavy for launch";
                document.getElementById("launchStatus").innerHTML = "Shuttle Not Ready for Launch";
                document.getElementById("launchStatusCheck").style.color = "rgb(199, 37, 78)";

            } else {

                document.getElementById("launchStatusCheck").style.color = "green";
                document.getElementById("launchStatusCheck").innerHTML = "Shuttle is Ready for Launch";
            }
        };
};


async function myFetch() {
    let planetsReturned;

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
    
    return planetChosen;
}

// module.exports.addDestinationInfo = addDestinationInfo;
// module.exports.validateInput = validateInput;
// module.exports.formSubmission = formSubmission;
// module.exports.pickPlanet = pickPlanet; 
// module.exports.myFetch = myFetch;
