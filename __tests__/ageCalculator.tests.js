import { AgeCalculator } from '../src/ageCalculator';

describe ('Age Calculator', () => {
    let user1, user2, user3, user4, user5;
    beforeEach(() => {
        user1 = new AgeCalculator(new Date('07-27-1987'));
        user2 = new AgeCalculator(new Date('01-29-1951'));
        user3 = new AgeCalculator(new Date('10-05-2012'));
        user4 = new AgeCalculator(new Date('10-05-2032'));
        user5 = new AgeCalculator(new Date());
    });
     
    test('should correctly create object Age Calculator', () => {
        expect(user1.birthday).toEqual(new Date('07-27-1987'));
        expect(user2.birthday).toEqual(new Date('01-29-1951'));
        expect(user3.birthday).toEqual(new Date('10-05-2012'));
        expect(user4.birthday).toEqual(new Date('10-05-2032'));
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