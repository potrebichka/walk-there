import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ListOfSpecialities } from './specialities';

$(function() {
    let location;
    $("#locationForm").submit(function(event) {
        event.preventDefault();
        location = $("#userLocationInput").val();
        
        (async () => {
            let listOfSpecialities = new ListOfSpecialities();
            const response = await listOfSpecialities.getListOfSpecialities();
            showListOfSpecialities(response.data);
        })();
    });

    function showListOfSpecialities(response) {
        for (let i=0; i<response.length; i++) {
            $("#symptomsUserSelect").append(`<option>${response[i].uid}</option>`);
        }
        $(".afterGettingLocation").show();
    }
});