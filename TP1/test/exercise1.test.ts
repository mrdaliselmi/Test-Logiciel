import { describe, expect, test } from "vitest";
import { upperCase } from "../src/exercise1";

describe("Test de la fonction upperCase", () => {
  test("Une chaîne vide.", () => {
    expect(upperCase("")).toBe("");
  });

  test("Une chaîne avec des caractères en minuscules.", () => {
    expect(upperCase("dali")).toEqual("DALI");
  });

  test("Une chaîne avec des caractères spéciaux.", () => {
    expect(upperCase("#test123!")).toMatch("#TEST123!");
  });
});
