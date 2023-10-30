import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// указывает, что импорты относительно этого пути должны рассматриваться как абсолютные
const aliases = {
  src: path.resolve(__dirname, "src/"),
  // src: "/src",
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: aliases,
  },
});
