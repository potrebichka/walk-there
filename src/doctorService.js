const API_KEY1='b8f1cd8682f21059f217b3ebe3197e87';

export class FindDoctor {
    async getDoctorByIssue(issue, lat, lon) {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?query=${issue}&sort=best-match-desc&location=${lat}%2C${lon}%2C50&user_location=${lat}%2C${lon}&skip=0&limit=10&user_key=${API_KEY1}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse; 
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }

    async getDoctorByName(name, lat, lon) {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${name}&sort=best-match-desc&location=${lat}%2C${lon}%2C50&user_location=${lat}%2C${lon}&skip=0&limit=10&user_key=${API_KEY1}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse; 
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }

    async getSpecialities() {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/specialties?fields=uid%2Cname&user_key=${API_KEY1}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse; 
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }

    async getDoctorBySpeciality(speciality, lat, lon) {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?specialty-uid=${speciality}&sort=best-match-desc&location=${lat}%2C${lon}%2C50&user_location=${lat}%2C${lon}&skip=0&limit=10&user_key=${API_KEY1}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse; 
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }
}
 

