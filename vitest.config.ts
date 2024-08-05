import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

// https://nextjs.org/docs/app/building-your-application/testing/vitest
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
  },
});
