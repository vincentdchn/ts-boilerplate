import { expect } from "jsr:@std/expect";
import { divide, multiply, subtract, sum } from "./sum.ts";

Deno.test("Math functions", async (t) => {
  await t.step("sum", () => {
    expect(sum(1, 2)).toBe(3);
    expect(sum(-1, 1)).toBe(0);
    expect(sum(0, 0)).toBe(0);
  });

  await t.step("multiply", () => {
    expect(multiply(2, 3)).toBe(6);
    expect(multiply(-2, 3)).toBe(-6);
    expect(multiply(0, 5)).toBe(0);
  });

  await t.step("subtract", () => {
    expect(subtract(5, 3)).toBe(2);
    expect(subtract(3, 5)).toBe(-2);
    expect(subtract(0, 0)).toBe(0);
  });

  await t.step("divide", () => {
    expect(divide(6, 2)).toBe(3);
    expect(divide(5, 2)).toBe(2.5);
    expect(() => divide(5, 0)).toThrow("Division by zero is not allowed");
  });
});
