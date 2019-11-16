import { lifeExpectancy } from '../src/lifeExpectancy';

//global variables
const earthOrbitPeriod = 365.26;
const mercuryOrbitPeriod = 87.97;
const venusOrbitPeriod = 224.7;
const marsOrbitPeriod = 1.8808476*365.26;
const jupiterOrbitPeriod = 11.862615*365.26;
const saturnOrbitPeriod = 29.447498*365.26;
const uranusOrbitPeriod = 84.016846*365.26;
const neptuneOrbitPeriod = 164.79132*365.26;
const plutoOrbitPeriod = 247.92065*365.26;

export class AgeCalculator {
    constructor(date, sex, country) {
        this.birthday = date;
        this.numberOfDays = (new Date() >= date) ? (new Date().getTime() - date.getTime())/(1000*3600*24) : null;
        this.sex = sex;
        this.country = country;
    }

    getAge(orbitPeriod) {
        if (this.numberOfDays || this.numberOfDays === 0) {
            return parseInt(this.numberOfDays / orbitPeriod);
        }
        return "You haven't born yet";
    }

    getEarthAge() {
        return this.getAge(earthOrbitPeriod);
    }

    getMercuryAge() {
        return this.getAge(mercuryOrbitPeriod);
    }

    getVenusAge() {
        return this.getAge(venusOrbitPeriod);
    }

    getMarsAge() {
        return this.getAge(marsOrbitPeriod);
    }

    getJupiterAge() {
        return this.getAge(jupiterOrbitPeriod);
    }

    getSaturnAge() {
        return this.getAge(saturnOrbitPeriod);
    }

    getUranusAge() {
        return this.getAge(uranusOrbitPeriod);
    }

    getNeptuneAge() {
        return this.getAge(neptuneOrbitPeriod);
    }

    getPlutoAge() {
        return this.getAge(plutoOrbitPeriod);
    }

    getStatistic() {
        const statistic = lifeExpectancy(this.sex, this.country);
        if (this.getEarthAge() === "You haven't born yet") {
            return statistic;
        }
        return statistic - (this.numberOfDays / earthOrbitPeriod);
    }

    getLifeExpectEarth() {
        return parseInt(this.getStatistic());
    }

    getLifeExpectMercury() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / mercuryOrbitPeriod);
    }

    getLifeExpectVenus() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / venusOrbitPeriod);
    }

    getLifeExpectMars() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / marsOrbitPeriod);
    }

    getLifeExpectJupiter() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / jupiterOrbitPeriod);
    }

    getLifeExpectSaturn() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / saturnOrbitPeriod);
    }

    getLifeExpectUranus() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / uranusOrbitPeriod);
    }

    getLifeExpectNeptune() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / neptuneOrbitPeriod);
    }

    getLifeExpectPluto() {
        return parseInt(this.getStatistic() * earthOrbitPeriod / plutoOrbitPeriod);
    }

    getNextBirthdayEarth() {
        let day = this.birthday.getDate().toString();
        day.length === 1 ? day = "0" + day : null;
        let month = (this.birthday.getMonth() + 1).toString();
        month.length === 1 ? month = "0" + month : null;
        let year;
        if (this.getEarthAge() === "You haven't born yet") {
            year = this.birthday.getFullYear();
        } else {
            year = this.birthday.getFullYear() + this.getEarthAge()+1; 
        }
        
        return `${month}-${day}-${year}`;
    }

    getStringResult(birthdayDate) {
        let day = birthdayDate.getDate().toString();
        day.length === 1 ? day = "0" + day : null;
        let month = (birthdayDate.getMonth() + 1).toString();
        month.length === 1 ? month = "0" + month : null;
        
        return `${month}-${day}-${birthdayDate.getFullYear()}`;
    }

    getNextBirthdayMercury() {
        let birthdayMercury;
        if (this.getMercuryAge() === "You haven't born yet") {
            birthdayMercury = this.birthday;
        } else {
            birthdayMercury = new Date((parseInt(this.getMercuryAge()) + 1) * mercuryOrbitPeriod * 3600*1000*24 + this.birthday.getTime());
        }
        
        return this.getStringResult(birthdayMercury);
    }
}