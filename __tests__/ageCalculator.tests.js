import { AgeCalculator } from '../src/ageCalculator';

describe ('Age Calculator', () => {
    let user;
    beforeEach(() => {
        user = new AgeCalculator(new Date('07-27-1987'));
    }) 
    test('should correctly create object Age Calculator', () => {
        expect(user.birthday).toEqual(new Date('07-27-1987'));
    })

    test('should correctly return user age in Mercury years', () => {
        expect(user.getMercuryAge()).toEqual(134)
    })
})