describe('Hello module', () => {
    let message;

    beforeEach(() => {
        message = 'hello';
    });

    test('message should be "hello"', () => {
        expect(message).toBe('hello');
    });
});
