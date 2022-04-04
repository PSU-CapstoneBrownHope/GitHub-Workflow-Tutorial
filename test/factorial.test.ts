import { exportAllDeclaration } from "@babel/types"

const factorialRec = require('../src/app')

test('factorial of 5 is 1*2*3*4*5', () => {
    expect(factorialRec(5)).toBe(1*2*3*4*5);
})

test('factorial of 0 is 0', () => {
    expect(factorialRec(0)).toBe(0);
})