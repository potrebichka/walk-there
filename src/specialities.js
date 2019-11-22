export class ListOfSpecialities {
    async getListOfSpecialities() {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/specialties?fields=uid&user_key=${process.env.API_KEY}`)
            let jsonifiedResponse = response.json();
            return jsonifiedResponse;
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }
}