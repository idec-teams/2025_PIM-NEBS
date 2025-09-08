import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from '@tailwindcss/vite'
import { stringToSlug } from "./src/utils";

// https://vitejs.dev/config/
export default () => {
  const env = loadEnv("dev", process.cwd());
  return defineConfig({
    base: `/2025_PIM-NEBS/`,
    plugins: [tailwindcss(), react()],
  });
};
