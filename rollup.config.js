import resolve from "rollup-plugin-node-resolve"
import commonjs from "rollup-plugin-commonjs"

export default {
  input: "./lib/index.js",
  output: {
    file: "build/bundle.js",
    format: "iife",
    name: "test"
  },
  watch: {
    include: "lib/**"
  },
  plugins: [resolve(), commonjs()]
}
