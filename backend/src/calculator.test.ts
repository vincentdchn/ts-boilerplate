import { expect } from "jsr:@std/expect";
import { Calculator } from "./calculator.ts";

Deno.test("Calculator", async (t) => {
  const calculator = new Calculator();

  await t.step("should add numbers using shared sum function", () => {
    expect(calculator.add(5, 3)).toBe(8);
  });

  await t.step("should multiply numbers using shared multiply function", () => {
    expect(calculator.multiply(4, 6)).toBe(24);
  });

  await t.step("should process add operation", () => {
    expect(calculator.processCalculation("add", 10, 20)).toBe(30);
  });

  await t.step("should process multiply operation", () => {
    expect(calculator.processCalculation("multiply", 5, 8)).toBe(40);
  });

  await t.step("should throw error for unsupported operation", () => {
    expect(() => calculator.processCalculation("divide", 10, 2)).toThrow(
      "Unsupported operation: divide",
    );
  });
});
