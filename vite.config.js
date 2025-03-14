import path from "path"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import commonjs from 'vite-plugin-commonjs'

// https://vite.dev/config/
export default defineConfig({
  assetsInclude: ["**/*.JPG", "**/*.jpg", "**/*.png", "**/*.svg"],
  plugins: [react(),commonjs()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    commonjsOptions: { transformMixedEsModules: true } // Change
  },
  // base: "/portfolio-react"
})
