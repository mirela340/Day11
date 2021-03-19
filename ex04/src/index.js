// Create a monitorsListArray here
var monitorsListArray = ["Apple", "Peach", "Berry"];

// End of monitorsListArray

function myMonitorsFunction(arr) {
    var newMonitorsList = [...arr];
    // Only change the code below this line
    var monitorsList = [];
    for (i = 0; i < monitorsListArray.length; i++) {
        monitorsList.push([monitorsListArray[i], i + 1]);
    }
    return monitorsList;
    // Only change the code above this line

}

console.log(myMonitorsFunction(monitorsListArray));
module.exports = myMonitorsFunction;