import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { AgeCalculator } from './ageCalculator';

$(function() {
    $("#ageForm").submit(function(event) {
        event.preventDefault();
        const userInput = new Date($("#userInput").val());
        const user = new AgeCalculator(userInput);
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