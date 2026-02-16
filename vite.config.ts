import path from "node:path";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes("node_modules")) {
            return;
          }

          if (
            id.includes("/node_modules/react/") ||
            id.includes("/node_modules/react-dom/") ||
            id.includes("/node_modules/scheduler/")
          ) {
            return "react-vendor";
          }

          if (id.includes("react-router-dom") || id.includes("@remix-run/router")) {
            return "router-vendor";
          }

          if (id.includes("@tanstack/react-query")) {
            return "query-vendor";
          }

          if (id.includes("motion")) {
            return "motion-vendor";
          }

          if (id.includes("lucide-react")) {
            return "icons-vendor";
          }

          if (id.includes("@radix-ui") || id.includes("cmdk") || id.includes("vaul")) {
            return "ui-vendor";
          }
        },
      },
    },
  },
});
