import {describe, expect, test} from "vitest";
import { add, subtract, multiply, divide } from "../src/BasicFunctions";

describe('BasicFunctions', () => {
  describe('add', () => {
    test('should add two positive numbers', () => {
      expect(add(2, 3)).toBe(5);
    });

    test('should add two negative numbers', () => {
      expect(add(-2, -3)).toBe(-5);
    });

    test('should add a positive and a negative number', () => {
      expect(add(2, -3)).toBe(-1);
    });
  });

  describe('subtract', () => {
    test('should subtract two positive numbers', () => {
      expect(subtract(5, 3)).toBe(2);
    });

    test('should subtract two negative numbers', () => {
      expect(subtract(-5, -3)).toBe(-2);
    });

    test('should subtract a positive and a negative number', () => {
      expect(subtract(5, -3)).toBe(8);
    });
  });

  describe('multiply', () => {
    test('should multiply two positive numbers', () => {
      expect(multiply(2, 3)).toBe(6);
    });

    test('should multiply two negative numbers', () => {
      expect(multiply(-2, -3)).toBe(6);
    });

    test('should multiply a positive and a negative number', () => {
      expect(multiply(2, -3)).toBe(-6);
    });
  });

  describe('divide', () => {
    test('should divide two positive numbers', () => {
      expect(divide(6, 3)).toBe(2);
    });

    test('should divide two negative numbers', () => {
      expect(divide(-6, -3)).toBe(2);
    });

    test('should divide a positive and a negative number', () => {
      expect(divide(6, -3)).toBe(-2);
    });
  });
});