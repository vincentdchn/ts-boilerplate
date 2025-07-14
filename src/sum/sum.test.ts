import { expect } from "jsr:@std/expect";
import { sum } from "./sum.ts";

Deno.test("sum", () => {
  Deno.test("should return the sum", () => {
    expect(sum(1, 2)).toBe(3);
  });
});
