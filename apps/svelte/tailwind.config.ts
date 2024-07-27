import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/svelte-lib/dist/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {},
  },

  plugins: [],
} as Config;
