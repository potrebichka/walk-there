import { AgeCalculator } from '../src/ageCalculator';

describe ('Age Calculator - age', () => {
    let user1, user2, user3, user4, user5;
    beforeEach(() => {
        user1 = new AgeCalculator(new Date('07-27-1987'), "female", "Russia");
        user2 = new AgeCalculator(new Date('01-29-1951'), "male", "Angola");
        user3 = new AgeCalculator(new Date('10-05-2012'), "male", "United_States");
        user4 = new AgeCalculator(new Date('10-05-2032'), "female", "United States");
        user5 = new AgeCalculator(new Date(), "female", "Canada");
    });
     
    test('should correctly create object Age Calculator', () => {
        expect(user1.birthday).toEqual(new Date('07-27-1987'));
        expect(user1.sex).toEqual("female");
        expect(user1.country).toEqual("Russia");
    });

    test('should correctly create object Age Calculator and calculate number of days', () => {
        expect(user1.numberOfDays).toEqual(11799);
        expect(user2.numberOfDays).toEqual(25127);
        expect(user3.numberOfDays).toEqual(2597);
        expect(user4.numberOfDays).toEqual(null);
        expect(user5.numberOfDays).toEqual(0);
    });

    test('should correctly return user age in Earth years', () => {
        expect(user1.getEarthAge()).toEqual(32);
        expect(user2.getEarthAge()).toEqual(68);
        expect(user3.getEarthAge()).toEqual(7);
        expect(user4.getEarthAge()).toEqual("You haven't born yet");
        expect(user5.getEarthAge()).toEqual(0);
    });

    test('should correctly return user age in Mercury years', () => {
        expect(user1.getMercuryAge()).toEqual(134);
        expect(user2.getMercuryAge()).toEqual(285);
        expect(user3.getMercuryAge()).toEqual(29);
        expect(user4.getMercuryAge()).toEqual("You haven't born yet");
        expect(user5.getMercuryAge()).toEqual(0);
    });

    test('should correctly return user age in Venus years', () => {
        expect(user1.getVenusAge()).toEqual(52);
        expect(user2.getVenusAge()).toEqual(111);
        expect(user3.getVenusAge()).toEqual(11);
        expect(user4.getVenusAge()).toEqual("You haven't born yet");
        expect(user5.getVenusAge()).toEqual(0);
    });

    test('should correctly return user age in Mars years', () => {
        expect(user1.getMarsAge()).toEqual(17);
        expect(user2.getMarsAge()).toEqual(36);
        expect(user3.getMarsAge()).toEqual(3);
        expect(user4.getMarsAge()).toEqual("You haven't born yet");
        expect(user5.getMarsAge()).toEqual(0);
    });

    test('should correctly return user age in Jupiter years', () => {
        expect(user1.getJupiterAge()).toEqual(2);
        expect(user2.getJupiterAge()).toEqual(5);
        expect(user3.getJupiterAge()).toEqual(0);
        expect(user4.getJupiterAge()).toEqual("You haven't born yet");
        expect(user5.getJupiterAge()).toEqual(0);
    });

    test('should correctly return user age in Saturn years', () => {
        expect(user1.getSaturnAge()).toEqual(1);
        expect(user2.getSaturnAge()).toEqual(2);
        expect(user3.getSaturnAge()).toEqual(0);
        expect(user4.getSaturnAge()).toEqual("You haven't born yet");
        expect(user5.getSaturnAge()).toEqual(0);
    });

    test('should correctly return user age in Uranus years', () => {
        expect(user1.getUranusAge()).toEqual(0);
        expect(user2.getUranusAge()).toEqual(0);
        expect(user3.getUranusAge()).toEqual(0);
        expect(user4.getUranusAge()).toEqual("You haven't born yet");
        expect(user5.getUranusAge()).toEqual(0);
    });

    test('should correctly return user age in Neptune years', () => {
        expect(user1.getNeptuneAge()).toEqual(0);
        expect(user2.getNeptuneAge()).toEqual(0);
        expect(user3.getNeptuneAge()).toEqual(0);
        expect(user4.getNeptuneAge()).toEqual("You haven't born yet");
        expect(user5.getNeptuneAge()).toEqual(0);
    });

    test('should correctly return user age in Pluto years', () => {
        expect(user1.getPlutoAge()).toEqual(0);
        expect(user2.getPlutoAge()).toEqual(0);
        expect(user3.getPlutoAge()).toEqual(0);
        expect(user4.getPlutoAge()).toEqual("You haven't born yet");
        expect(user5.getPlutoAge()).toEqual(0);
    });
})

describe('Age Calculator - Life Expectancy', ()=> {
    let user1, user2, user3, user4, user5;
    beforeEach(() => {
        user1 = new AgeCalculator(new Date('07-27-1987'), "female", "Russia");
        user2 = new AgeCalculator(new Date('01-29-1951'), "male", "Angola");
        user3 = new AgeCalculator(new Date('10-05-2012'), "male", "United_States");
        user4 = new AgeCalculator(new Date('10-05-2032'), "female", "United_States");
        user5 = new AgeCalculator(new Date(), "female", "Canada");
    });

    test("should correctly return how many years a user has left to live on Earth", ()=> {
        expect(user1.getLifeExpectEarth()).toEqual(43);
        expect(user2.getLifeExpectEarth()).toEqual(-17);
        expect(user3.getLifeExpectEarth()).toEqual(67);
        expect(user4.getLifeExpectEarth()).toEqual(81);
        expect(user5.getLifeExpectEarth()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Mercury", ()=> {
        expect(user1.getLifeExpectMercury()).toEqual(43);
        expect(user2.getLifeExpectMercury()).toEqual(-17);
        expect(user3.getLifeExpectMercury()).toEqual(67);
        expect(user4.getLifeExpectMercury()).toEqual(81);
        expect(user5.getLifeExpectMercury()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Venus", ()=> {
        expect(user1.getLifeExpectVenus()).toEqual(43);
        expect(user2.getLifeExpectVenus()).toEqual(-17);
        expect(user3.getLifeExpectVenus()).toEqual(67);
        expect(user4.getLifeExpectVenus()).toEqual(81);
        expect(user5.getLifeExpectVenus()).toEqual(84);
    });

        test("should correctly return how many years a user has left to live on Mars", ()=> {
        expect(user1.getLifeExpectMars()).toEqual(43);
        expect(user2.getLifeExpectMars()).toEqual(-17);
        expect(user3.getLifeExpectMars()).toEqual(67);
        expect(user4.getLifeExpectMars()).toEqual(81);
        expect(user5.getLifeExpectMars()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Jupiter", ()=> {
        expect(user1.getLifeExpectJupiter()).toEqual(43);
        expect(user2.getLifeExpectJupiter()).toEqual(-17);
        expect(user3.getLifeExpectJupiter()).toEqual(67);
        expect(user4.getLifeExpectJupiter()).toEqual(81);
        expect(user5.getLifeExpectJupiter()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Saturn", ()=> {
        expect(user1.getLifeExpectSaturn()).toEqual(43);
        expect(user2.getLifeExpectSaturn()).toEqual(-17);
        expect(user3.getLifeExpectSaturn()).toEqual(67);
        expect(user4.getLifeExpectSaturn()).toEqual(81);
        expect(user5.getLifeExpectSaturn()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Uranus", ()=> {
        expect(user1.getLifeExpectUranus()).toEqual(43);
        expect(user2.getLifeExpectUranus()).toEqual(-17);
        expect(user3.getLifeExpectUranus()).toEqual(67);
        expect(user4.getLifeExpectUranus()).toEqual(81);
        expect(user5.getLifeExpectUranus()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Neptune", ()=> {
        expect(user1.getLifeExpectNeptune()).toEqual(43);
        expect(user2.getLifeExpectNeptune()).toEqual(-17);
        expect(user3.getLifeExpectNeptune()).toEqual(67);
        expect(user4.getLifeExpectNeptune()).toEqual(81);
        expect(user5.getLifeExpectNeptune()).toEqual(84);
    });

    test("should correctly return how many years a user has left to live on Pluto", ()=> {
        expect(user1.getLifeExpectPluto()).toEqual(43);
        expect(user2.getLifeExpectPluto()).toEqual(-17);
        expect(user3.getLifeExpectPluto()).toEqual(67);
        expect(user4.getLifeExpectPluto()).toEqual(81);
        expect(user5.getLifeExpectPluto()).toEqual(84);
    });
});
