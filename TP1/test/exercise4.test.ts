import { describe, expect, test } from "vitest";
import { fetchRandomUser } from "../src/exercise4";

describe("Test de la fonction fetchRandomUser", () => {

    test("Test 1: fetchRandomUser retourne une resultat", async () => {
        const user = await fetchRandomUser();
        expect(user).toBeDefined();
    });

    test("Test 2: fetchRandomUser retourne un objet", async () => {
        const user = await fetchRandomUser();
        expect(user).toBeInstanceOf(Object);
    });
});
