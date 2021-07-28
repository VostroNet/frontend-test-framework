import {sum, fibonacci} from "../src/sum";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});

test('fibonacci', () => {
    const ff = fibonacci(5);
    console.log("out", ff);
});
