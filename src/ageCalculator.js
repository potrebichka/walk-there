export class AgeCalculator {
    constructor(date) {
        this.birthday = date;
        this.numberOfDays = (new Date() >= date) ? parseInt((new Date().getTime() - date.getTime())/(1000*3600*24)) : null;
    };

    getMercuryAge() {
        //let mercuryAge = 
    };

    getEarthAge() {
        const earthOrbitPeriod = 365.26;
        if (this.numberOfDays || this.numberOfDays === 0) {
            return parseInt(this.numberOfDays / earthOrbitPeriod);
        }
        return "You haven't born yet"
        
    }
}