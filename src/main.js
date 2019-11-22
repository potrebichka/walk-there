import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { ListOfSpecialities } from './doctorService';

$(function() {
    //let location;
    $("#locationForm").submit(function(event) {
        event.preventDefault();
        //const location = $("#userLocationInput").val();

        
        // (async () => {
        //     let listOfConditions = new ListOfConditions();
        //     const response = await listOfConditions.getListOfConditions();
        //     showListOfConditions(response.data);
        // })();
        
        (async () => {
            let listOfSpecialities = new ListOfSpecialities();
            const response = await listOfSpecialities.getListOfSpecialities();
            showListOfSpecialities(response.data);
        })();

    });

    function showListOfSpecialities(response) {
        for (let i=0; i<response.length; i++) {
            $("#specialityUserSelect").append(`<option>${response[i].uid}</option>`);
        }
        $(".afterGettingLocation").show();
    }

    // function showListOfConditions(response) {
    //     for (let i=0; i<response.length; i++) {
    //         $("#symptomsUserSelect").append(`<option>${response[i].name}</option>`);
    //     }
    // }


    
});