import {httpRequest} from './api/api.js';

$(document).ready(function() {
    $('.cd100').countdown100({
        // Set Endtime here
        // Endtime must be > current time
        endtimeYear: 0,
        endtimeMonth: 0,
        endtimeDate: 35,
        endtimeHours: 18,
        endtimeMinutes: 0,
        endtimeSeconds: 0,
        timeZone: "" 
        // ex:  timeZone: "America/New_York", can be empty
        // go to " http://momentjs.com/timezone/ " to get timezone
    });
    
    $('.js-tilt').tilt({
        scale: 1.1
    })
    
    // Set current year for @copyright
    let date = new Date();
    let fullYear = date.getFullYear();
    document.getElementById("current-year").textContent = fullYear;
})