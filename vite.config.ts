import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@styles": path.resolve(__dirname, "./src/app/styles"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [react()],
});
