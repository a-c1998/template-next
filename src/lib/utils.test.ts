import { expect, test } from "vitest";

import { cn } from "./utils";

test("concatenates classes correctly", () => {
  expect(cn("class1", "class2")).toBe("class1 class2");
  expect(cn("class1", "class2", "class3")).toBe("class1 class2 class3");
});

test("handles Tailwind conflicts", () => {
  expect(cn("px-2 py-1", "p-4")).toBe("p-4");
});

test("handles array input", () => {
  expect(cn(["class1", "class2"])).toBe("class1 class2");
});

test("handles conditional inputs using an object", () => {
  expect(cn({ class1: true, class2: false, class3: true })).toBe(
    "class1 class3"
  );
});

test("handles mixed input types", () => {
  expect(cn("always", ["sometimes"], { donotadd: false, addme: true })).toBe(
    "always sometimes addme"
  );
});
