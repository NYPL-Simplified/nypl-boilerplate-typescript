import * as Utility from "./Utility"

/** A simple class that can add and subtract numbers. */
export default class Calculator {
    /** Add two numbers together. */
    public add(x: number, y: number): number {
        return Utility.foo(x, y);
    }

    /** Subtract the second number from the first. */
    /** @param x The number to subtract from. */
    /** @param y The number to subtract by. */
    public subtract(x: number, y: number): number {
        return Utility.bar(x, y);
    }
}