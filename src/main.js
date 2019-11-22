import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { FindDoctor } from './doctorService';
import { CoordinatesFromAddress} from './coordinatesFromLocation';

$(function() {
    $("#locationForm").submit(function(event) {
        event.preventDefault();
        const location = $("#userLocationInput").val();
        const medicalIssue = $("#userIssueInput").val();        

        let lon, lat;
        if (!location) {
            if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(function(position) {
                    lat = position.coords.latitude;
                    lon=position.coords.longitude;
                    getDoctors(medicalIssue,lat, lon);
                });
            } else {
                lat = "47.608013";
                lon = "-122.335167";
                getDoctors(medicalIssue,lat,lon);
            }
        } else {
            (async() => {
                let coordinatesFromLocation = new CoordinatesFromAddress();
                const response = await coordinatesFromLocation.getCoordinates(location);
                lat = response.results[0].geometry.lat;
                lon =  response.results[0].geometry.lng;
                getDoctors(medicalIssue,lat, lon);
            })();
        }
    });

    function getDoctors(medicalIssue, lat,lon){
        (async () => {
            try {
                let findDoctor = new FindDoctor();
                const response = await findDoctor.getDoctor(medicalIssue , lat, lon);
                showDoctor(response.data);
            } catch(error) {
                $("#notFound").text("No doctor found");
                $(".results").show();
            }
            
        })();
    }

    function showDoctor(response) {
        console.log(response);
        for (let i=0; i< response.length; i++) {
            $("#listOfDoctors").append(`<li>Name: ${response[i].profile.first_name} ${response[i].profile.last_name}</li>`)
        }
        $(".results").show();
    }
    
});