import reactRefresh from "@vitejs/plugin-react-refresh";
import { defineConfig } from "vite";
import { getAliases } from "vite-aliases";

const aliases = getAliases({ prefix: "" });

export default defineConfig({
  plugins: [reactRefresh()],
  resolve: {
    alias: aliases,
  },
});
