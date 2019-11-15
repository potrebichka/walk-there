import { lifeExpectancy, LifeExpectancy } from '../src/lifeExpectancy';

describe("Life expectancy", ()=> {

    let user1, user2, user3, user4;
    
    beforeEach(() => {
        user1 = new LifeExpectancy('female', 'Russia');
        user2 = new LifeExpectancy('male', 'Angola');
    });

    test("should correctly create an object", ()=> {
        expect(user1.sex).toEqual("female");
        expect(user1.country).toEqual("Russia");
        expect(user2.sex).toEqual("male");
        expect(user2.country).toEqual("Angola");
    })
})