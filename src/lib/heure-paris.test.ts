import { describe, expect, it } from "vitest";
import { heureParis } from "./heure-paris";

describe("heureParis", () => {
  it("donne l'heure de Paris en hiver (UTC+1)", () => {
    expect(heureParis(new Date("2026-01-15T10:30:00Z"))).toBe(11);
  });
  it("donne l'heure de Paris en été (UTC+2)", () => {
    expect(heureParis(new Date("2026-07-15T10:30:00Z"))).toBe(12);
  });
  it("passe bien minuit (0 et non 24)", () => {
    expect(heureParis(new Date("2026-01-15T23:10:00Z"))).toBe(0);
  });
});
