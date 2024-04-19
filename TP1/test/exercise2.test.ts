import { describe, expect, test } from "vitest";
import { mergeSort } from "../src/exercise2";

describe("Test de la fonction mergeSort", () => {
  test("Test 1: tableau vide", () => {
    expect(mergeSort([])).toEqual([]);
  });

  test("Test 2: tableau de taille 1", () => {
    expect(mergeSort([5])).toEqual([5]);
  });

  test("Test 3: tableau déjà trié", () => {
    expect(mergeSort([1, 2, 3, 4, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Test 4: tableau inversé", () => {
    expect(mergeSort([5, 4, 3, 2, 1])).toEqual([1, 2, 3, 4, 5]);
  });

  test("Test 5: les tableaux avec des éléments non numériques (We are using TypeScript 😝)", () => {
    // expect(() => mergeSort([1, 'a', 2, 'b'])).toThrow();
  });

  test("Test 6: les tableaux avec elements dupliqués", () => {
    expect(mergeSort([3, 1, 4, 1, 5, 9, 2, 6, 5, 3, 5])).toEqual([
      1, 1, 2, 3, 3, 4, 5, 5, 5, 6, 9,
    ]);
  });
});
