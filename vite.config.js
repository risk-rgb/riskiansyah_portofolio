import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  base: "/riskiansyah_portofolio/", // Sesuaikan dengan nama repo GitHub kamu
  plugins: [react(), tailwindcss()],
});
