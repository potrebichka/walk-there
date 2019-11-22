// const API_KEY='b8f1cd8682f21059f217b3ebe3197e87';

export class ListOfSpecialities {
    async getListOfSpecialities() {
        try {
            let response = await fetch(`https://api.betterdoctor.com/2016-03-01/specialties?fields=uid&user_key=b8f1cd8682f21059f217b3ebe3197e87`);
            let jsonifiedResponse = response.json();
            return jsonifiedResponse; 
        } catch(error) {
            console.error("There was an error handling your request: " + error.message);
        }
    }
}

// export class ListOfConditions {
//     async getListOfConditions() {
//         try {
//             let response = await fetch(`https://api.betterdoctor.com/2016-03-01/conditions?&user_key=b8f1cd8682f21059f217b3ebe3197e87`);
//             let jsonifiedResponse = response.json();
//             return jsonifiedResponse;
//         } catch(error) {
//             console.error("There was an error handling your request: " + error.message);
//         }
//     }
// }