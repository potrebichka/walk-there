import { ageCalculator, AgeCalculator } from '../src/ageCalculator';

describe ('Age Calculator', () => {
    test('should correctly create object Age Calculator', () => {
        let user = new AgeCalculator(23);
        expect(user.age).toEqual(23);
    })
})