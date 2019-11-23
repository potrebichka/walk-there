const API_KEY2 = process.env.API_KEY2;

export class CoordinatesFromAddress {
    async getCoordinates(address) {
        try {
            let response = await fetch(`https://api.opencagedata.com/geocode/v1/json?q=${address}&key=${API_KEY2}`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse; 
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }
}