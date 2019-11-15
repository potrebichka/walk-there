import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './ageCalculator';
import { countries } from './lifeExpectancy';
import "./img/earth.gif";
import "./img/mercury.gif";
import "./img/venus.gif";
import "./img/jupiter.gif";
import "./img/saturn.gif";
import "./img/mars.gif";
import "./img/uranus.gif";
import "./img/neptune.gif";
import "./img/pluto.gif";

$(function() {

    $("#results").hide();
    const sortedCountries = [...countries].sort();
    for (let i =0; i <sortedCountries.length; i++) {
        const country = sortedCountries[i];
        $("#countryInput").append(`<option value=${country}>${country}</option>`);
    }


    $("#ageForm").submit(function(event) {
        event.preventDefault();
        const dateInput = new Date($("#userInput").val());
        const sexInput = $("#sexInput").val();
        const countryInput = $("#countryInput").val();
        const user = new AgeCalculator(dateInput, sexInput, countryInput);
        $("#earthAge").text(user.getEarthAge());
        $("#mercuryAge").text(user.getMercuryAge());
        $("#venusAge").text(user.getVenusAge());
        $("#marsAge").text(user.getMarsAge());
        $("#jupiterAge").text(user.getJupiterAge());
        $("#saturnAge").text(user.getSaturnAge());
        $("#uranusAge").text(user.getUranusAge());
        $("#neptuneAge").text(user.getNeptuneAge());
        $("#plutoAge").text(user.getPlutoAge());
        $("#results").show();
        
    });
});