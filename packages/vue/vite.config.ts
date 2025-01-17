import path from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwind from "tailwindcss";
import autoprefixer from "autoprefixer";
import { peerDependencies, dependencies } from "./package.json";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: ["./src/index.ts"],
      name: "shadcn-vue-components",
      formats: ["es", "cjs"],
    },
    rollupOptions: {
      external: [
        ...Object.keys(peerDependencies),
        ...Object.keys(dependencies),
      ],
      output: {
        preserveModules: true,
        preserveModulesRoot: "src",
        exports: "named",
      },
    },
    sourcemap: true,
    emptyOutDir: true,
    chunkSizeWarningLimit: 500,
  },
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()],
    },
  },
  plugins: [
    vue(),
    dts({
      include: ["src/**/*"],
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});

// export default defineConfig({
//   plugins: [vue()], // to process SFC
//   build: {
//     lib: {
//       entry: path.resolve(__dirname, "src/index.ts"),
//       name: "my-lib",
//       formats: ["es"], // adding 'umd' requires globals set to every external module
//       // fileName: (format) => `my-lib.${format}.js`,
//     },
//     rollupOptions: {
//       // external modules won't be bundled into your library
//       external: ["vue"], // not every external has a global
//       output: {
//         // disable warning on src/index.ts using both default and named export
//         exports: "named",
//         // Provide global variables to use in the UMD build
//         // for externalized deps (not useful if 'umd' is not in lib.formats)
//         globals: {
//           vue: "Vue",
//         },
//       },
//     },
//     emptyOutDir: false, // to retain the types folder generated by tsc
//   },
// });
