import { defineConfig } from "rollup";
import typescript from "@rollup/plugin-typescript";

export default defineConfig({
  input: "src/index.ts",
  output: [
    {
      format: "esm",
      file: "dist/index.es.js",
    },
    {
      format: "cjs",
      file: "dist/index.cjs.js",
    },
    {
      format: "umd",
      file: "dist/index.umd.js",
      name: "BezierAnimation",
    },
  ],
  plugins: [typescript()],
});
