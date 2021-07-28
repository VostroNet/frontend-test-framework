export function sum(a, b) {
    return a + b;
}
// https://www.programiz.com/javascript/examples/fibonacci-series - Example 1

export function fibonacci(len) {
    let n1 = 0, n2 = 1, nextTerm;
    let result = [];
    for (let i = 1; i <= len; i++) {
        result.push(n1)
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }
    return result;
}