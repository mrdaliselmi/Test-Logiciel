import { describe, expect, test } from "vitest";
import { isPriceInRange } from "../src/exercise3";

describe("Test de la fonction isPriceInRange", () => {
  test("Price est egal au minimum", () => {
    expect(isPriceInRange(42, 42, 69)).toBeTruthy();
  });
  test("Price est egal au maximum", () => {
    expect(isPriceInRange(69, 42, 69)).toBeTruthy();
  });
  test("Price est dans l'intervale", () => {
    expect(isPriceInRange(42.69, 42, 69)).toBe(true);
  });

  test("Price est inferieur au minimum", () => {
    expect(isPriceInRange(13, 42, 69)).toBeFalsy();
  });
  test("Price est superieur au maximum", () => {
    expect(isPriceInRange(69.42, 42, 69)).toBeFalsy();
  });
});
