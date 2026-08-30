import { describe, expect, it } from "vitest";
import { memoryInputSchema, projectInputSchema } from "./index";

describe("domain validation", () => {
  it("applies safe project defaults", () => expect(projectInputSchema.parse({ name: "DevMind" })).toMatchObject({ status: "active", techStack: [] }));
  it("rejects invalid memory importance", () => expect(() => memoryInputSchema.parse({ projectId: crypto.randomUUID(), type: "decision", title: "DB", content: "Postgres", importance: 11 })).toThrow());
});
