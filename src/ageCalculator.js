export class AgeCalculator {
    constructor(date) {
        this.birthday = date;
        this.numberOfDays = (new Date() >= date) ? parseInt((new Date().getTime() - date.getTime())/(1000*3600*24)) : null;
    }

    getAge(orbitPeriod) {
        if (this.numberOfDays || this.numberOfDays === 0) {
            return parseInt(this.numberOfDays / orbitPeriod);
        }
        return "You haven't born yet";
    }

    getEarthAge() {
        const earthOrbitPeriod = 365.26;
        return this.getAge(earthOrbitPeriod);
    }

    getMercuryAge() {
        const mercuryOrbitPeriod = 87.97;
        return this.getAge(mercuryOrbitPeriod);
    }

    getVenusAge() {
        const venusOrbitPeriod = 224.7;
        return this.getAge(venusOrbitPeriod);
    }

    getMarsAge() {
        const marsOrbitPeriod = 1.8808476*365.26;
        return this.getAge(marsOrbitPeriod);
    }

    getJupiterAge() {
        const jupiterOrbitPeriod = 11.862615*365.26;
        return this.getAge(jupiterOrbitPeriod);
    }

    getSaturnAge() {
        const saturnOrbitPeriod = 29.447498*365.26;
        return this.getAge(saturnOrbitPeriod);
    }

    getUranusAge() {
        const uranusOrbitPeriod = 84.016846*365.26;
        return this.getAge(uranusOrbitPeriod);
    }

    getNeptuneAge() {
        const neptuneOrbitPeriod = 164.79132*365.26;
        return this.getAge(neptuneOrbitPeriod);
    }

    getPlutoAge() {
        const plutoOrbitPeriod = 247.92065*365.26;
        return this.getAge(plutoOrbitPeriod);
    }
}