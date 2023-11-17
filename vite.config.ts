/// <reference types="vitest" />
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import svgrPlugin from "vite-plugin-svgr";
import viteTsconfigPaths from "vite-tsconfig-paths";
import nodePolyfills from 'rollup-plugin-polyfill-node'

export default defineConfig({
  plugins: [
    react(),
    viteTsconfigPaths(),
    svgrPlugin(),
    nodePolyfills({
      include: ["node_modules/**/*.js", new RegExp("node_modules/.vite/.*js")],
      http: true,
      crypto: true,
    }),
  ],
  resolve: {
    alias: {
      crypto: 'crypto-browserify',
      stream: 'stream-browserify',
      assert: 'assert'
    }
  },
  build: {
    outDir: "build",
    rollupOptions: {
      plugins: [nodePolyfills({ crypto: true, http: true })]
    },
    commonjsOptions: {
      transformMixedEsModules: true
    }
  },
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./src/setupTests.tsx",
    coverage: {
      reporter: ["text", "html", "json-summary", "json"],
      exclude: ["node_modules/", "src/setupTests.tsx"],
    },
  },
});
