import { defineConfig } from "vite";
import * as path from "path";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    mainFields: [],
    alias: {
      "@stores": path.resolve(__dirname, "src/stores"),
      "@components": path.resolve(__dirname, "src/components"),
    },
  },
  plugins: [react()],
});
