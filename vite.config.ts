
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import fs from "fs";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  
  base: './', // <-- Added for GitHub Pages deployment
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
    {
      name: 'copy-index-to-404',
      closeBundle: () => {
        // Copy index.html to 404.html after build for GitHub Pages fallback
        const dist = "dist";
        const from = `${dist}/index.html`;
        const to = `${dist}/404.html`;
        if (fs.existsSync(from)) {
          fs.copyFileSync(from, to);
          console.log("Copied index.html to 404.html for GitHub Pages SPA support.");
        }
      }
    }
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
