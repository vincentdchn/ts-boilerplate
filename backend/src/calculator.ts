import { logger, multiply, sum } from "@shared";

export class Calculator {
  add(a: number, b: number): number {
    return sum(a, b);
  }

  multiply(a: number, b: number): number {
    return multiply(a, b);
  }

  processCalculation(operation: string, a: number, b: number): number {
    switch (operation) {
      case "add":
        return this.add(a, b);
      case "multiply":
        return this.multiply(a, b);
      default:
        throw new Error(`Unsupported operation: ${operation}`);
    }
  }
}

const calculator = new Calculator();

const result1 = calculator.processCalculation("add", 15, 25);
const result2 = calculator.processCalculation("multiply", 6, 7);

logger.info(`Result 1 (15 + 25): ${result1}`);
logger.info(`Result 2 (6 * 7): ${result2}`);
