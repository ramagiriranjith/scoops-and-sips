import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    {
      name: "spa-fallback",
      configureServer(server: any) {
        server.middlewares.use((req: any, res: any, next: any) => {
          if (req.url && !req.url.startsWith("/src/") && !req.url.includes(".")) {
            req.url = "/index.html";
          }
          next();
        });
      },
    },
  ].filter(Boolean) as any,
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
